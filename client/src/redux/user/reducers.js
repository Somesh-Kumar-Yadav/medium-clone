import {
	GET_DATA_FAILURE_2,
	GET_DATA_REQUEST_2,
	GET_DATA_SUCCESS_2,
	GET_TOPIC_SUCCESS_2,
	GET_PEOPLE_SUCCESS_2,
	GET_FOLLOWING_TOPIC_SUCCESS_2,
} from "./actionTypes";
const initState = {
	blogs: [],
	topics: [],
	people: [],
	followingTopics: [],
	isError: false,
	isLoading: false,
};
export const userReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_DATA_REQUEST_2:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case GET_DATA_SUCCESS_2:
			return {
				...state,
				blogs: [...payload],
			};
		case GET_TOPIC_SUCCESS_2:
			return {
				...state,
				topics: [...payload],
				isLoading: false,
			};
		case GET_PEOPLE_SUCCESS_2:
			return {
				...state,
				people: [...payload],
			};
		case GET_FOLLOWING_TOPIC_SUCCESS_2:
			return {
				...state,
				followingTopics: [...payload],
			};
		case GET_DATA_FAILURE_2:
			return {
				...state,
				isError: true,
				isLoading: false,
			};
		default:
			return state;
	}
};
