import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
} from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";
const isAuth = loadData("isAuth");
const user = loadData("user");
const initState = {
	isAuth: isAuth === "true" ? true : false,
	user: user ? user : {},
	users: [],
	isError: false,
	isLoading: false,
};
export const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case LOGIN_SUCCESS:
			saveData("user", payload);
			saveData("isAuth", "true");
			return {
				...state,
				isAuth: true,
				user: payload,
				isLoading: false,
			};

		case LOGIN_FAILURE:
			saveData("user", null);
			saveData("isAuth", "false");
			return {
				...state,
				isAuth: false,
				user: {},
				isError: false,
				isLoading: false,
			};
		case GET_DATA_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case GET_DATA_SUCCESS:
			return {
				...state,
				users: [...payload],
				isLoading: false,
			};
		case GET_DATA_FAILURE:
			return {
				...state,
				isError: true,
				isLoading: false,
			};
		default:
			return state;
	}
};
