const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("./auth.model");

// validation schema
const schema = Joi.object({
	email: Joi.string().trim().lowercase().email().required(),
	password: Joi.string().trim().min(8).required(),
});

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

const signup = async (req, res, next) => {
	// validate the request body
	const { email, password } = req.body;
	const { error } = schema.validate({ email, password });

	if (error) {
		const err = new Error(error.details[0].message);
		res.status(422);
		return next(err);
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

const login = async (req, res, next) => {
	// validate the request body
	const { email, password } = req.body;
	const { error } = schema.validate({ email, password });

	if (error) {
		const err = new Error(error.details[0].message);
		res.status(422);
		return next(err);
	}

	try {
		// check if user exists in db
		const user = await User.findOne({ email });

		if (!user) {
			const err = new Error("Invalid username or password");
			res.status(422);
			return next(err);
		}

		// check if the password is correct
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			const err = new Error("Invalid username or password");
			res.status(422);
			return next(err);
		}

		// if all the above checks pass - generate the token and send as response
		genToken(user, res, next);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	signup,
	login,
};
