const mongoose = require("mongoose");

const { mongoURI } = require("../config");

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connection successful!"))
	.catch((err) => console.log("Error connecting to MongoDB", err));
