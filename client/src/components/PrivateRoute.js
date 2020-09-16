import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { authState } = useContext(AuthContext);
	const { isAuthenticated } = authState;

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
