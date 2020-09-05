const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("./auth.model");

// validation schema
const schema = Joi.object({
	email: Joi.string().trim().lowercase().email().required(),
	password: Joi.string().trim().min(8).required(),
});

// handle error and call next
const handleError = (statusCode, message, res, next) => {
	const err = new Error(message);
	res.status(statusCode);
	next(err);
};

// generate the jwt token
const genToken = (user, res, next) => {
	const payload = {
		id: user._id,
	};
	jwt.sign(
		payload,
		process.env.JWT_SECRET,
		{ expiresIn: "1d" },
		(err, token) => {
			if (err) {
				return next(err);
			} else {
				res.json({ token });
			}
		}
	);
};

// new user signup controller
const signup = async (req, res, next) => {
	// validate the request body
	const { email, password } = req.body;
	const { error } = schema.validate({ email, password });

	if (error) {
		return handleError(422, error.details[0].message, res, next);
	}

	try {
		// save the user to db
		const user = await new User({ email, password }).save();

		// generate the token to send as response
		genToken(user, res, next);
	} catch (err) {
		// check for unique email constraint
		if (err.code === 11000) {
			res.status(409);
			err.message = "This email is already registered.";
		}

		next(err);
	}
};

// user login controller
const login = async (req, res, next) => {
	// validate the request body
	const { email, password } = req.body;
	const { error } = schema.validate({ email, password });

	if (error) {
		return handleError(422, error.details[0].message, res, next);
	}

	try {
		// check if user exists in db
		const user = await User.findOne({ email });

		if (!user) {
			return handleError(422, "Invalid email or password", res, next);
		}

		// check if the password is correct
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return handleError(422, "Invalid email or password", res, next);
		}

		// if all the above checks pass - generate the token and send as response
		genToken(user, res, next);
	} catch (err) {
		next(err);
	}
};

// to authenticate the user and the token on client
const authenticate = (req, res) => {
	res.json({
		user: req.user,
	});
};

module.exports = {
	signup,
	login,
	authenticate,
};
