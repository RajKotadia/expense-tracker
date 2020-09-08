const { notFound, errorHandler } = require("./error");
const { checkTokenSetUser, isLoggedIn } = require("./auth");

module.exports = {
	checkTokenSetUser,
	isLoggedIn,
	notFound,
	errorHandler,
};
