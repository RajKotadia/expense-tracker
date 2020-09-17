const Joi = require("joi");

const Transaction = require("./transaction.model");
const handleError = require("../../helpers/handleError");

// validation schema
const schema = Joi.object({
	text: Joi.string().trim().required(),
	amount: Joi.number().required(),
});

// get all the transactions of the loggedIn user
const getTransactions = async (req, res, next) => {
	const { userId } = req;

	try {
		const transactions = await Transaction.find({ user: userId });
		res.status(200).json({ transactions: transactions.reverse() });
	} catch (err) {
		next(err);
	}
};

// add a new transaction for loggedIn user
const addTransaction = async (req, res, next) => {
	// validate the request body
	const { text, amount } = req.body;
	const { error } = schema.validate({ text, amount });

	if (error) {
		return handleError(422, error.details[0].message, res, next);
	}

	const { userId } = req;

	try {
		const transaction = await Transaction({
			user: userId,
			text,
			amount,
		}).save();

		res.status(201).json({
			transaction: {
				_id: transaction._id,
				text: transaction.text,
				amount: transaction.amount,
				createdAt: transaction.createdAt,
			},
		});
	} catch (err) {
		next(err);
	}
};

// update a particular transaction by Id
const editTransaction = async (req, res, next) => {
	// validate the user input
	const { text, amount } = req.body;
	const { error } = schema.validate({ text, amount });

	if (error) {
		return handleError(422, error.details[0].message, res, next);
	}

	const { userId } = req;
	const { id } = req.params;

	try {
		// find the transaction and update
		const transaction = await Transaction.findOne({
			_id: id,
			user: userId,
		});

		if (!transaction) {
			return handleError(404, "Not Found", res, next);
		}

		transaction.text = text;
		transaction.amount = amount;
		const updatedTransaction = await transaction.save();

		res.status(200).json({ transaction: updatedTransaction });
	} catch (err) {
		next(err);
	}
};

// delete a particular transaction by Id
const deleteTransaction = async (req, res, next) => {
	const { userId } = req;
	const { id } = req.params;

	try {
		// find the transaction by id and delete
		const transaction = await Transaction.findOne({
			_id: id,
			user: userId,
		});

		if (!transaction) {
			return handleError(404, "Not Found", res, next);
		}

		await transaction.remove();

		res.status(200).send(deletedTransaction);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getTransactions,
	addTransaction,
	editTransaction,
	deleteTransaction,
};
