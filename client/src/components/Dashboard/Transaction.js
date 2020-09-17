import React, { useContext } from "react";
import { format, parseISO } from "date-fns";
import styled from "styled-components";

import deleteIcon from "../../assets/delete.svg";
import { TransactionContext } from "../../context/transaction/TransactionContext";
import { deleteTransaction } from "../../context/transaction/transactionActions";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Text = styled.div`
	flex: 1;
	font-size: 18px;
`;

const DeleteButton = styled.button`
	background-color: transparent;
	border: 0;
	opacity: 0.4;
	padding-right: 12px;
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

const Date = styled.p`
	font-size: 12px;
	margin-bottom: 1px;
	color: #999;
`;

const Transaction = ({ transaction, showDate }) => {
	const { dispatch } = useContext(TransactionContext);

	const sign = transaction.amount < 0 ? "-" : "+";

	return (
		<Wrapper>
			<DeleteButton
				onClick={() => deleteTransaction(transaction._id, dispatch)}
			>
				<img src={deleteIcon} alt="delete-icon" height="10" />
			</DeleteButton>
			<Text>
				{showDate && (
					<Date>
						{format(parseISO(transaction.createdAt), "h:mm a")}
					</Date>
				)}
				{transaction.text}
			</Text>
			<Span>
				{sign} ₹ {Math.abs(transaction.amount)}
			</Span>
		</Wrapper>
	);
};

export default Transaction;
