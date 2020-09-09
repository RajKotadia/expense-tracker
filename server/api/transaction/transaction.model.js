const mongoose = require("mongoose");

const User = require("../auth/auth.model");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: User,
		},
		text: {
			type: String,
			trim: true,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
