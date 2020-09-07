import { LOADING, ERROR, SUCCESS, RESET, AUTHENTICATE } from "../types";

const authReducer = (state, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
			};

		case LOADING:
			return {
				...state,
				loading: true,
				error: null,
			};

		case ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
				isAuthenticated: false,
			};

		case SUCCESS:
			localStorage.setItem("token", action.payload);
			return {
				...state,
				loading: true,
				error: null,
				success: true,
			};

		case RESET:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				error: null,
				success: false,
			};

		default:
			return state;
	}
};

export default authReducer;
