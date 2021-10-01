import {
	GET_DATA_FAILURE_2,
	GET_DATA_REQUEST_2,
	GET_DATA_SUCCESS_2,
	GET_TOPIC_SUCCESS_2,
	GET_PEOPLE_SUCCESS_2,
	GET_FOLLOWING_TOPIC_SUCCESS_2,
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

export const getUserData = (payload) => (dispatch) => {
	try {
		dispatch(getRequest());
		console.log(payload);
		axios.get(`http://localhost:2345/${payload}/topics`).then((res) => {
			console.log("topics", res.data.topics);
			dispatch(getFollowingTopic(res.data.topics));
		});
		axios.get(`http://localhost:2345/${payload}/nottopics`).then((res) => {
			console.log("nottopics", res.data.data);
			dispatch(getTopic(res.data.data));
		});
		axios.get(`http://localhost:2345/${payload}/notfollow`).then((res) => {
			console.log("notfollow", res.data.data);
			dispatch(getPeople(res.data.data));
		});
		axios.get(`http://localhost:2345/${payload}/followingblogs`).then((res) => {
			console.log("blogs", res.data.data);
			dispatch(getSuccess(res.data.data));
		});
	} catch (e) {
		dispatch(getFailure());
	}
};
