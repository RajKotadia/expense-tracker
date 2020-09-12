import React, { useContext } from "react";
import { TransactionContext } from "../../context/transaction/TransactionContext";

const Balance = () => {
	const { transactionState } = useContext(TransactionContext);
	const { transactions } = transactionState;

	const balance = transactions.reduce(
		(prev, current) => prev + current.amount,
		0
	);

	return (
		<>
			<h4>Your Balance</h4>
			<h2>
				{balance < 0 && "-"} ₹ {Math.abs(balance)}
			</h2>
		</>
	);
};

export default Balance;
