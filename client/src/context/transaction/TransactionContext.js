import React, { createContext, useReducer } from "react";

import transactionReducer from "./transactionReducer";

const initialState = {
	transactions: [],
	error: null,
	loading: false,
};

export const TransactionContext = createContext();

const TransactionContextProvider = ({ children }) => {
	const [transactionState, dispatch] = useReducer(
		transactionReducer,
		initialState
	);

	return (
		<TransactionContext.Provider value={{ transactionState, dispatch }}>
			{children}
		</TransactionContext.Provider>
	);
};

export default TransactionContextProvider;
