import React, { useState, useContext } from "react";
import styled from "styled-components";

import { TransactionContext } from "../../context/transaction/TransactionContext";
import { addTransaction } from "../../context/transaction/transactionActions";
import { FormField, Input } from "../Form";
import Button from "../Button";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

const H3 = styled.h3`
	padding-bottom: 6px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
`;

const AddTransaction = () => {
	const [transaction, setTransaction] = useState({});
	const { transactionState, dispatch } = useContext(TransactionContext);
	const { loading, error } = transactionState;

	const handleChange = (e) => {
		setTransaction({
			...transaction,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const hnadleSubmit = (e) => {
		e.preventDefault();
		addTransaction(transaction, dispatch);
		setTransaction({});
	};

	return (
		<>
			<H3>Add Transaction</H3>
			{error && <ErrorMessage>{error}</ErrorMessage>}
			<form onSubmit={hnadleSubmit}>
				<FormField>
					<Input
						type="text"
						name="text"
						placeholder="Text"
						value={transaction.text || ""}
						onChange={handleChange}
						autoComplete="off"
						required
					/>
				</FormField>
				<FormField>
					<Input
						type="number"
						name="amount"
						placeholder="Amount"
						value={transaction.amount || ""}
						onChange={handleChange}
						autoComplete="off"
						required
					/>
				</FormField>
				<FormField>
					<Button type="submit">
						{loading ? <Loading /> : "Add"}
					</Button>
				</FormField>
			</form>
		</>
	);
};

export default AddTransaction;
