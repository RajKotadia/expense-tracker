import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	padding: 10px;
	display: block;
	width: 100%;
	font-size: 1rem;
	border-radius: 8px;
	outline: none;
	border: 2px solid ${({ theme }) => theme.colors.gray};

	&:focus {
		border: 2px solid ${({ theme }) => theme.colors.primary};
	}
`;

const Input = ({ ...rest }) => {
	return <StyledInput {...rest} />;
};

export default Input;
