import React from "react";
import styled from "styled-components";

const Error = styled.p`
	color: ${({ theme }) => theme.colors.red};
	text-align: center;
	font-size: 14px;
`;

const ErrorMessage = ({ children }) => {
	return <Error>{children}</Error>;
};

export default ErrorMessage;
