import React from "react";
import styled from "styled-components";

import { FormField, Input } from "../Form";
import Button from "../Button";

const H3 = styled.h3`
	padding-bottom: 6px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
`;

const AddTransaction = () => {
	return (
		<>
			<H3>Add Transaction</H3>
			<form>
				<FormField>
					<Input
						type="text"
						name="text"
						placeholder="Text"
						autoComplete="off"
						required
					/>
				</FormField>
				<FormField>
					<Input
						type="text"
						name="amount"
						placeholder="Amount"
						autoComplete="off"
						required
					/>
				</FormField>
				<FormField>
					<Button type="submit">Add</Button>
				</FormField>
			</form>
		</>
	);
};

export default AddTransaction;
