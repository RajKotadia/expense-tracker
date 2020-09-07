import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	display: block;
	width: 100%;
	font-size: 1rem;
	font-weight: 500;
	padding: 10px;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.accent};
	border: none;
	outline: none;
	cursor: pointer;
	min-height: 39px;

	&:disabled {
		opacity: 0.6;
	}
`;

const Button = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
