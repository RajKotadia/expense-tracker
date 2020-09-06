import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import svgImage from "./../assets/cash.svg";

const Wrapper = styled.div`
	text-align: center;
	min-height: calc(79vh - 25px - 60px);
	margin: 3.5rem 1.5rem;
`;

const Title = styled.h3`
	color: ${({ theme }) => theme.colors.accent};
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 1.2rem;

	@media (max-width: 500px) {
		font-size: 1rem;
		letter-spacing: 0px;
	}
`;

const Info = styled.h1`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 2.6rem;
	margin: 1rem 8rem 2rem 8rem;

	@media (max-width: 500px) {
		font-size: 1.8rem;
		margin: 1rem 0rem 2rem 0rem;
	}
`;

const StyledImage = styled.img`
	height: 110px;
	display: block;
	margin: 3rem auto;
`;

const StyledLink = styled(Link)`
	display: inline-block;
	margin: 1rem auto;
	font-size: 1.1rem;
	font-weight: 500;
	padding: 0.9rem 2.8rem;
	border-radius: 9px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.accent};
	text-decoration: none;
`;

const Footer = styled.footer`
	font-weight: 600;
	height: 20px;
	text-align: center;
`;

const Home = () => {
	return (
		<>
			<Wrapper>
				<Title>Xpenser ~ Expense Tracker</Title>
				<Info>
					A webapp to manage and keep track of all your daily Expenses
				</Info>
				<StyledImage src={svgImage} alt="expense-tracker-img" />
				<StyledLink to="/signup">Sign up</StyledLink>
			</Wrapper>
			<Footer>
				~// Developed by{" "}
				<a
					href="https://github.com/RajKotadia"
					target="_blank"
					rel="noopener noreferrer"
				>
					Raj Kotadia
				</a>
			</Footer>
		</>
	);
};

export default Home;
