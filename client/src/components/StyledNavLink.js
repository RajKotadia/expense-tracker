import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	padding-bottom: 3px;

	@media (hover: hover) {
		&:hover {
			color: ${({ theme }) => theme.colors.accent};
		}
	}
`;

const StyledNavLink = ({ to, children }) => {
	return (
		<StyledLink
			to={to}
			activeStyle={{
				borderBottom: "3px solid #45339c",
			}}
		>
			{children}
		</StyledLink>
	);
};

export default StyledNavLink;
