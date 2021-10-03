import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_TOPIC_SUCCESS,
	GET_TRENDING_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	GET_BLOGS_REQUEST,
	GET_BLOGS_SUCCESS,
	GET_BLOGS_FAILURE,
	GET_SINGLE_BLOG,
} from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";
import { blogExample } from "../../utils/example";

const isAuth = loadData("isAuth");
const user = loadData("user");
const initState = {
	isAuth: isAuth === "true" ? true : false,
	user: user ? user : {},
	blogs: [],
	topics: [],
	trending: [],
	isError: false,
	isLoading: false,
	topicBlogs: [],
	singleBlog: blogExample,
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
				blogs: [...payload],
			};
		case GET_TRENDING_SUCCESS:
			return {
				...state,
				trending: [...payload],
			};
		case GET_TOPIC_SUCCESS:
			return {
				...state,
				topics: [...payload],
				isLoading: false,
			};
		case GET_DATA_FAILURE:
			return {
				...state,
				isError: true,
				isLoading: false,
			};
		case GET_BLOGS_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case GET_BLOGS_SUCCESS:
			return {
				...state,
				topicBlogs: [...payload],
				isLoading: false,
			};
		case GET_BLOGS_FAILURE:
			return {
				...state,
				isError: true,
				isLoading: false,
			};
		case GET_SINGLE_BLOG:
			return {
				...state,
				singleBlog: payload,
			};
		default:
			return state;
	}
};
