// handle error and call next
const handleError = (statusCode, message, res, next) => {
	const err = new Error(message);
	res.status(statusCode);
	next(err);
};

module.exports = handleError;
