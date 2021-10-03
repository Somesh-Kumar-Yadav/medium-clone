import {
	GET_DATA_FAILURE_2,
	GET_DATA_REQUEST_2,
	GET_DATA_SUCCESS_2,
	GET_TOPIC_SUCCESS_2,
	GET_PEOPLE_SUCCESS_2,
	GET_FOLLOWING_TOPIC_SUCCESS_2,
	POST_BLOG_FAILURE,
	POST_BLOG_SUCCESS,
	POST_BLOG_REQUEST,
	TOPIC_SUCCESS,
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
		case POST_BLOG_REQUEST:
			return {
				...state,
				isError: false,
				isLoading: true,
			};
		case POST_BLOG_SUCCESS:
			return {
				...state,
				isError: false,
				isLoading: false,
			};
		case POST_BLOG_FAILURE:
			return {
				...state,
				isError: true,
				isLoading: false,
			};
		case TOPIC_SUCCESS:
			return {
				...state,
				followingTopics: [...state.followingTopics, payload],
			};
		default:
			return state;
	}
};
