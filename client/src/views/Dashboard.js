import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

	useEffect(() => {
		console.log(window.innerHeight);
		setHeight(window.innerHeight);
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
