import React from "react";
import styled from "styled-components";

import deleteIcon from "../../assets/delete.svg";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Text = styled.p`
	flex: 1;
`;

const DeleteButton = styled.button`
	background-color: transparent;
	border: 0;
	opacity: 0.4;
	padding-right: 8px;
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

const Transaction = () => {
	return (
		<Wrapper>
			<DeleteButton>
				<img src={deleteIcon} alt="delete-icon" height="10" />
			</DeleteButton>
			<Text>Cash</Text>
			<Span>- ₹ 0.00</Span>
		</Wrapper>
	);
};

export default Transaction;
