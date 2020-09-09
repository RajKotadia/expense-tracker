const express = require("express");

const {
	getTransactions,
	addTransaction,
	editTransaction,
	deleteTransaction,
} = require("./transaction.controllers");

const router = express.Router();

router.get("/", getTransactions);
router.post("/", addTransaction);
router.patch("/:id", editTransaction);
router.delete("/:id", deleteTransaction);

module.exports = router;
