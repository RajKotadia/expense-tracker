import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TransactionContext } from "../../context/transaction/TransactionContext";
import Transaction from "./Transaction";

export const H3 = styled.h3`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin: 25px 0px 15px 0px;
	padding-bottom: 6px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledLink = styled(Link)`
	display: inline-block;
	margin-right: 6px;
	text-decoration: none;
	font-size: 15px;
	color: ${({ theme }) => theme.colors.accent};
	font-weight: 600;
	-webkit-user-select: none;
	-webkit-tap-highlight-color: transparent;
	user-select: none;

	&:hover {
		opacity: 0.8;
	}
`;

const Ul = styled.ul`
	list-style-type: none;
	margin-bottom: 28px;
`;

export const ListItem = styled.li`
	padding: 10px;
	margin: 10px 0;
	background-color: #fff;
	color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.gray},
		0px 2px 12px ${({ theme }) => theme.colors.gray};
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	border-right: 3px solid
		${(props) =>
			props.minus ? props.theme.colors.red : props.theme.colors.green};
`;

export const Info = styled.p`
	margin: 2.2rem 0rem;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.colors.secondary};
	text-align: center;
`;

const RecentTransactions = () => {
	const { transactionState } = useContext(TransactionContext);
	const { transactions } = transactionState;

	const cards = transactions.slice(0, 2).map((element) => (
		<ListItem key={element._id} minus={element.amount < 0}>
			<Transaction transaction={element} showDate={false} />
		</ListItem>
	));

	const listOfTransactions = transactions.length ? (
		<Ul>{cards}</Ul>
	) : (
		<Info>~ No Transactions ~</Info>
	);

	return (
		<>
			<H3>
				Recent Transactions
				<StyledLink to="/dashboard/transactions">View All</StyledLink>
			</H3>
			{listOfTransactions}
		</>
	);
};

export default RecentTransactions;
