import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth/AuthContext";
import { authValidator } from "../helpers/inputValidator";
import { ERROR } from "../context/types";
import { register } from "../context/auth/authActions";
import { Wrapper, FormTitle, FormField, Input } from "../components/Form";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

const Signup = () => {
	const [user, setUser] = useState({});

	const { authState, dispatch } = useContext(AuthContext);
	const { loading, error, isAuthenticated } = authState;

	const handleSubmit = (e) => {
		e.preventDefault();

		// validate the input
		const result = authValidator(user);

		if (result.error) {
			dispatch({ type: ERROR, payload: result.errorMessage });
			setUser({
				...user,
				password: "",
				confirmPassword: "",
			});
			return;
		}

		// if the input is correct - register the user
		register(user, dispatch);
	};

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	// route the user directly to dashboard if already authenticated
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Wrapper>
			<FormTitle>SIGNUP</FormTitle>
			{error ? <ErrorMessage>{error}</ErrorMessage> : null}
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
					<Input
						type="password"
						name="confirmPassword"
						value={user.confirmPassword || ""}
						onChange={handleChange}
						placeholder="Confirm Password"
						required
					/>
				</FormField>

				<FormField>
					<Button type="submit" disabled={loading}>
						{loading ? <Loading /> : "Register"}
					</Button>
				</FormField>
			</form>
		</Wrapper>
	);
};

export default Signup;
