import api, { setHeaders } from "../../api";
import { LOADING, ERROR, SUCCESS, AUTHENTICATE, RESET } from "../types";

// verfiy the token and authenticate the user
export const authenticate = async (dispatch) => {
	const token = localStorage.getItem("token");
	setHeaders(token);

	try {
		const response = await api.get("/auth");
		const { user } = response.data;

		if (user) {
			dispatch({ type: AUTHENTICATE });
		} else {
			dispatch({ type: RESET });
		}
	} catch (err) {
		dispatch({
			type: ERROR,
			payload: "Something went wrong, please try again !!",
		});
	}
};

// register the new user
export const register = async (state, dispatch) => {
	dispatch({ type: LOADING });
	try {
		const response = await api.post("/auth/signup", state);
		const { token } = response.data;

		dispatch({ type: SUCCESS, payload: token });
		authenticate(dispatch);
	} catch (err) {
		if (err.response) {
			dispatch({ type: ERROR, payload: err.response.data.message });
		} else {
			dispatch({ type: ERROR, payload: "Seems like you are offline" });
		}
	}
};

// user login
export const login = async (state, dispatch) => {
	dispatch({ type: LOADING });

	try {
		const response = await api.post("/auth/login", state);
		const { token } = response.data;

		dispatch({ type: SUCCESS, payload: token });
		authenticate(dispatch);
	} catch (err) {
		if (err.response) {
			dispatch({ type: ERROR, payload: err.response.data.message });
		} else {
			dispatch({ type: ERROR, payload: "Seems like you are offline" });
		}
	}
};

// log user out and clear the token
export const logout = (dispatch) => {
	dispatch({ type: RESET });
};
