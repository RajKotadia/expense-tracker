import api from "../../api";

import {
	LOADING,
	ERROR,
	SUCCESS,
	ADD_TRANSACTION,
	DELETE_TRANSACTION,
} from "../types";

export const fetchTransactions = async (dispatch) => {
	dispatch({ type: LOADING });
	try {
		const response = await api.get("/transactions");
		const { transactions } = response.data;

		dispatch({ type: SUCCESS, payload: transactions });
	} catch (err) {
		if (err.response) {
			dispatch({ type: ERROR, payload: err.response.data.message });
		} else {
			dispatch({ type: ERROR, payload: "Network Error !!" });
		}
	}
};

export const addTransaction = async (state, dispatch) => {
	dispatch({ type: LOADING });

	try {
		const response = await api.post("/transactions", state);
		const { transaction } = response.data;

		dispatch({ type: ADD_TRANSACTION, payload: transaction });
	} catch (err) {
		if (err.response) {
			dispatch({ type: ERROR, payload: err.response.data.message });
		} else {
			dispatch({ type: ERROR, payload: "Network Error !!" });
		}
	}
};

export const deleteTransaction = async (state, dispatch) => {
	try {
		await api.delete(`/transactions/${state}`);
		dispatch({ type: DELETE_TRANSACTION, payload: state });
	} catch (err) {
		if (err.response) {
			dispatch({ type: ERROR, payload: err.response.data.message });
		} else {
			dispatch({ type: ERROR, payload: "Network Error !!" });
		}
	}
};
