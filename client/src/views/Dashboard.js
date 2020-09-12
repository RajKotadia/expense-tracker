import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { TransactionContext } from "../context/transaction/TransactionContext";
import { fetchTransactions } from "../context/transaction/transactionActions";

import {
	Balance,
	IncomeExpense,
	RecentTransactions,
	AddTransaction,
} from "../components/Dashboard";

const Wrapper = styled.div`
	display: flex;
	max-height: ${({ height }) => `${height - 61}px`};
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 320px;
	margin: 0.9rem auto 6px auto;

	@media (max-height: 1024px) and (min-height: 700px) {
		margin: 2rem auto 10px auto;
	}
`;

const Dashboard = () => {
	const [height, setHeight] = useState(0);
	const { transactionState, dispatch } = useContext(TransactionContext);

	useEffect(() => {
		setHeight(window.innerHeight);
		fetchTransactions(dispatch);
	}, []);

	return (
		<Wrapper height={height}>
			<Container>
				<Balance />
				<IncomeExpense />
				<RecentTransactions />
				<AddTransaction />
			</Container>
		</Wrapper>
	);
};

export default Dashboard;
