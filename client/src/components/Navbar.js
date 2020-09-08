import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth/AuthContext";
import { logout } from "../context/auth/authActions";
import StyledNavLink from "./StyledNavLink";
import Logo from "./../assets/logo.svg";

const Nav = styled.nav`
	padding: 1rem 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 500px) {
		padding: 1rem 1.5rem;
	}
`;

const Banner = styled(Link)`
	color: ${({ theme }) => theme.colors.accent};
	font-weight: 900;
	font-size: 1.3rem;
	text-decoration: none;
	-webkit-user-select: none;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
`;

const Span = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	margin-right: 6px;
	height: 28px;
`;

const Ul = styled.ul`
	padding: 0rem 0.6rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	list-style: none;
`;

const ListItem = styled.li`
	padding: 0.3rem;
	margin: 0rem 0.2rem;
	font-size: 1rem;
	font-weight: 700;
	-webkit-user-select: none;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
`;

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	padding-bottom: 3px;

	@media (hover: hover) {
		&:hover {
			color: ${({ theme }) => theme.colors.accent};
		}
	}
`;

const Navbar = () => {
	const { authState, dispatch } = useContext(AuthContext);
	const { isAuthenticated } = authState;

	return (
		<Nav>
			<Banner to="/">
				<Span>
					<Img src={Logo} alt="logo" height="30" /> Xpenser
				</Span>
			</Banner>
			<Ul>
				{isAuthenticated ? (
					<ListItem>
						<StyledLink to="/" onClick={() => logout(dispatch)}>
							Logout
						</StyledLink>
					</ListItem>
				) : (
					<>
						<ListItem>
							<StyledNavLink to="/signup">Signup</StyledNavLink>
						</ListItem>
						<ListItem>
							<StyledNavLink to="/login">Login</StyledNavLink>
						</ListItem>
					</>
				)}
			</Ul>
		</Nav>
	);
};

export default Navbar;
