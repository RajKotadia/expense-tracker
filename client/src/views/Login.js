import React, { useState, useContext } from "react";

import { AuthContext } from "../context/auth/AuthContext";
import { login } from "../context/auth/authActions";
import { Wrapper, FormTitle, FormField, Input } from "../components/Form";
import Button from "../components/Button";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { Redirect } from "react-router-dom";

const Login = () => {
	const { authState, dispatch } = useContext(AuthContext);
	const { isAuthenticated, loading, error } = authState;

	const [user, setUser] = useState({});

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login(user, dispatch);
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Wrapper>
			<FormTitle>LOGIN</FormTitle>
			{error && <ErrorMessage>{error}</ErrorMessage>}
			<form onSubmit={handleSubmit}>
				<FormField>
					<Input
						type="email"
						name="email"
						value={user.email || ""}
						onChange={handleChange}
						placeholder="Email"
						autoComplete="off"
						required
					/>
				</FormField>
				<FormField>
					<Input
						type="password"
						name="password"
						value={user.password || ""}
						onChange={handleChange}
						placeholder="Password"
						required
					/>
				</FormField>
				<FormField>
					<Button type="submit" disabled={loading}>
						{loading ? <Loading /> : "Login"}
					</Button>
				</FormField>
			</form>
		</Wrapper>
	);
};

export default Login;
