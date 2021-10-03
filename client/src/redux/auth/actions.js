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
export const getSuccess = (blogs) => {
	return { type: GET_DATA_SUCCESS, payload: blogs };
};
export const getTopic = (topics) => {
	return { type: GET_TOPIC_SUCCESS, payload: topics };
};
export const getTrending = (trending) => {
	return { type: GET_TRENDING_SUCCESS, payload: trending };
};
export const getFailure = () => {
	return { type: GET_DATA_FAILURE };
};
export const blogsRequest = () => {
	return { type: GET_BLOGS_REQUEST };
};
export const blogsSuccess = (payload) => {
	return { type: GET_BLOGS_SUCCESS, payload };
};
export const blogsFailure = () => {
	return { type: GET_BLOGS_FAILURE };
};
export const blogsSingleSuccess = (payload) => {
	return { type: GET_SINGLE_BLOG, payload };
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
export const getBlogs = () => (dispatch) => {
	try {
		dispatch(getRequest());
		axios.get("http://localhost:2345/blogs").then((res) => {
			dispatch(getSuccess(res.data.blogs));
		});
		axios.get("http://localhost:2345/trending").then((res) => {
			dispatch(getTrending(res.data.trending));
		});
		axios.get("http://localhost:2345/topics").then((res) => {
			dispatch(getTopic(res.data.topics));
		});
	} catch (e) {
		dispatch(getFailure());
	}
};

export const allTopicBlogs = (payload) => (dispatch) => {
	try {
		dispatch(blogsRequest());
		axios.post("http://localhost:2345/topicsblog", payload).then((res) => {
			dispatch(blogsSuccess(res.data.data));
		});
	} catch (e) {
		dispatch(blogsFailure());
	}
};
export const refreshData = () => (dispatch) => {
	try {
		axios.get("http://localhost:2345/blogs").then((res) => {
			dispatch(getSuccess(res.data.blogs));
		});
	} catch (e) {
		dispatch(getFailure());
	}
};
