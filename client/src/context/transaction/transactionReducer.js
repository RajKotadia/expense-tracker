import {
	LOADING,
	ERROR,
	SUCCESS,
	ADD_TRANSACTION,
	DELETE_TRANSACTION,
} from "../types";

const transactionReducer = (state, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};

		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case SUCCESS:
			return {
				...state,
				error: null,
				loading: false,
				transactions: action.payload,
			};

		case ADD_TRANSACTION:
			return {
				...state,
				loading: false,
				transactions: [action.payload, ...state.transactions],
			};

		case DELETE_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.filter(
					(t) => t._id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default transactionReducer;
