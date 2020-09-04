const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		minlength: 8,
		required: true,
	},
});

// hash the password before saving
UserSchema.pre("save", async function () {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
