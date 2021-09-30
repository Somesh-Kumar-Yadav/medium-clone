import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const loginRequest = () => {
	return { type: LOGIN_REQUEST };
};
export const loginSuccess = (user) => {
	return { type: LOGIN_SUCCESS, payload: user };
};
export const loginFailure = (err) => {
	return { type: LOGIN_FAILURE, payload: err };
};
export const getRequest = () => {
	return { type: GET_DATA_REQUEST };
};
export const getSuccess = (user) => {
	return { type: GET_DATA_SUCCESS, payload: user };
};
export const getFailure = (err) => {
	return { type: GET_DATA_FAILURE, payload: err };
};
export const loginUser = (payload) => (dispatch) => {
	dispatch(loginRequest());
	const pay = {
		email: payload.email,
		familyName: payload.familyName,
		givenName: payload.givenName,
		imageUrl: payload.imageUrl,
		name: payload.name,
	};
	axios
		.post("http://localhost:2345/users", pay)
		.then((res) => {
			dispatch(loginSuccess(res.data));
		})
		.catch((err) => {
			dispatch(loginFailure(err.message));
		});
};
export const logoutUser = (payload) => (dispatch) => {
	dispatch(loginRequest());
	dispatch(loginFailure());
};
