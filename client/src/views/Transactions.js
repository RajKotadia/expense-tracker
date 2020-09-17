import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { groupBy } from "lodash";
import { parseISO, format } from "date-fns";

import { TransactionContext } from "../context/transaction/TransactionContext";
import { fetchTransactions } from "../context/transaction/transactionActions";
import { Transaction } from "../components/Dashboard";
import {
	H3,
	StyledLink,
	ListItem,
	Info,
} from "../components/Dashboard/RecentTransactions";

const Wrapper = styled.div`
	max-width: 340px;
	margin: 1rem auto;
`;

const Ul = styled.ul`
	list-style-type: none;
`;

const TransactionGroup = styled.div`
	margin: 1.6rem auto;
`;

const H4 = styled.h4`
	margin-bottom: 6px;
	margin-left: 2px;
`;

const Transactions = () => {
	const { transactionState, dispatch } = useContext(TransactionContext);
	const { transactions } = transactionState;

	useEffect(() => {
		fetchTransactions(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// group transactions by date
	const transactionsByDate = groupBy(transactions, (t) => {
		return format(parseISO(t.createdAt), "d MMM Y");
	});

	const transactionsList = Object.keys(transactionsByDate).map(
		(date, index) => {
			const list = transactionsByDate[date].map((element) => (
				<ListItem key={element._id} minus={element.amount < 0}>
					<Transaction transaction={element} showDate={true} />
				</ListItem>
			));

			return (
				<TransactionGroup key={index}>
					<H4>{date}</H4>
					<Ul>{list}</Ul>
				</TransactionGroup>
			);
		}
	);

	return (
		<Wrapper>
			<H3>
				All Transactions
				<StyledLink to="/dashboard">Back</StyledLink>
			</H3>
			{transactions.length > 0 ? (
				<div>{transactionsList}</div>
			) : (
				<Info>~ No Transactions ~</Info>
			)}
		</Wrapper>
	);
};

export default Transactions;
