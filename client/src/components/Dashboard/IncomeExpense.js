import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
	margin: 20px 0;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	border-radius: 12px;
	box-shadow: 0px 2px 16px ${({ theme }) => theme.colors.gray},
		0px 2px 16px ${({ theme }) => theme.colors.gray};
`;

const Div = styled.div`
	flex: 1;
	text-align: center;

	${({ border }) =>
		border &&
		css`
			border-right: 2px solid ${({ theme }) => theme.colors.gray};
		`}
`;

const Total = styled.p`
	margin: 5px 0;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 1px;
	color: ${(props) =>
		props.minus ? props.theme.colors.red : props.theme.colors.green};
`;

const IncomeExpense = () => {
	return (
		<Wrapper>
			<Div border>
				<h4>Income</h4>
				<Total>₹ 0.00</Total>
			</Div>
			<Div>
				<h4>Expense</h4>
				<Total minus>₹ 0.00</Total>
			</Div>
		</Wrapper>
	);
};

export default IncomeExpense;
