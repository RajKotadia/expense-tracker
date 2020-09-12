import React, { useContext } from "react";
import styled from "styled-components";

import deleteIcon from "../../assets/delete.svg";
import { TransactionContext } from "../../context/transaction/TransactionContext";
import { deleteTransaction } from "../../context/transaction/transactionActions";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Text = styled.p`
	flex: 1;
`;

const DeleteButton = styled.button`
	background-color: transparent;
	border: 0;
	opacity: 0.4;
	padding-right: 8px;
	cursor: pointer;
	outline: none;
	-webkit-user-select: none;
	-webkit-tap-highlight-color: transparent;
	user-select: none;

	&:focus {
		opacity: 0.8;
	}

	@media (hover: hover) {
		&:hover {
			opacity: 0.8;
		}
	}
`;

const Span = styled.span`
	min-width: 60px;
	text-align: right;
`;

const Transaction = ({ transaction }) => {
	const { dispatch } = useContext(TransactionContext);

	const sign = transaction.amount < 0 ? "-" : "+";

	return (
		<Wrapper>
			<DeleteButton
				onClick={() => deleteTransaction(transaction._id, dispatch)}
			>
				<img src={deleteIcon} alt="delete-icon" height="10" />
			</DeleteButton>
			<Text>{transaction.text}</Text>
			<Span>
				{sign} ₹ {Math.abs(transaction.amount)}
			</Span>
		</Wrapper>
	);
};

export default Transaction;
