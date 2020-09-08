import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { authState } = useContext(AuthContext);
	const { isAuthenticated } = authState;

	return isAuthenticated ? (
		<Route {...rest} render={(props) => <Component {...props} />} />
	) : (
		<Redirect to="/login" />
	);
};

export default PrivateRoute;
