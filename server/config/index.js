require("dotenv").config();

if (process.env.NODE_ENV === "production") {
	module.exports = {
		port: process.env.PORT,
		mongoURI: process.env.MONGO_URI,
	};
} else {
	module.exports = {
		port: 1337,
		mongoURI: "mongodb://localhost:27017/ExpenseTracker",
	};
}
