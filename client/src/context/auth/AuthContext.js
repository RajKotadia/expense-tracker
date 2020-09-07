import React, { createContext, useReducer } from "react";

import authReducer from "./authReducer";

export const AuthContext = createContext();

const initialState = {
	isAuthenticated: false,
	loading: false,
	error: null,
	success: false,
};

const AuthContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, initialState);

	return (
		<AuthContext.Provider value={{ authState, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
