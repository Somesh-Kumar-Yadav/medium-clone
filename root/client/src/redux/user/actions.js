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
import axios from "axios";

const getRequest = () => {
	return { type: GET_DATA_REQUEST_2 };
};
const getSuccess = (blogs) => {
	return { type: GET_DATA_SUCCESS_2, payload: blogs };
};
const getTopic = (topics) => {
	return { type: GET_TOPIC_SUCCESS_2, payload: topics };
};
const getPeople = (people) => {
	return { type: GET_PEOPLE_SUCCESS_2, payload: people };
};
const getFollowingTopic = (topics) => {
	return { type: GET_FOLLOWING_TOPIC_SUCCESS_2, payload: topics };
};
const getFailure = () => {
	return { type: GET_DATA_FAILURE_2 };
};

const postRequest = () => {
	return { type: POST_BLOG_REQUEST };
};
const postSuccess = () => {
	return { type: POST_BLOG_SUCCESS };
};
const postFailure = () => {
	return { type: POST_BLOG_FAILURE };
};
export const topicSelect = (payload) => {
	return { type: TOPIC_SUCCESS, payload };
};
export const getUserData = (payload) => (dispatch) => {
	try {
		dispatch(getRequest());
		axios.get(`http://localhost:2345/${payload}/topics`).then((res) => {
			dispatch(getFollowingTopic(res.data.topics));
		});
		axios.get(`http://localhost:2345/${payload}/nottopics`).then((res) => {
			dispatch(getTopic(res.data.data));
		});
		axios.get(`http://localhost:2345/${payload}/notfollow`).then((res) => {
			dispatch(getPeople(res.data.data));
		});
		axios.get(`http://localhost:2345/${payload}/followingblogs`).then((res) => {
			dispatch(getSuccess(res.data.data));
		});
	} catch (e) {
		dispatch(getFailure());
	}
};
export const postBlogs = (payload) => (dispatch) => {
	const config = {
		headers: { "Content-Type": "multipart/form-data" },
	};
	try {
		dispatch(postRequest());
		axios.post("http://localhost:2345/blogs", payload, config).then((res) => {
			//console.log(res.data);
			dispatch(postSuccess());
		});
	} catch (e) {
		dispatch(postFailure());
	}
};
