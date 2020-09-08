const jwt = require("jsonwebtoken");

// verify the token received from client and set the payload on the req object
const checkTokenSetUser = (req, res, next) => {
	const authHeader = req.get("Authorization");

	if (authHeader) {
		const token = authHeader.split(" ")[1];

		if (token) {
			jwt.verify(token, process.env.JWT_SECRET, (err, decodedPayload) => {
				if (!err) {
					req.user = {
						id: decodedPayload.id,
					};
				}
			});
		}
	}

	next();
};

// check if the user is authenticated to access the private resources
const isLoggedIn = (req, res, next) => {
	const { user } = req;

	if (user) {
		req.userId = user.id;
		next();
	} else {
		const err = new Error("Un-Authorized");
		res.status(401);
		next(err);
	}
};

module.exports = {
	checkTokenSetUser,
	isLoggedIn,
};
