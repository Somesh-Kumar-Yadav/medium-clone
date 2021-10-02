import React from "react";
import styles from "../../styles/LandingPage.module.css"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allTopicBlogs } from "../../redux/auth/actions";

export const Topic = ({ topic }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleDispatch = () => {
        dispatch(allTopicBlogs({topic:topic.title}));
        history.push(`/topic/${topic.title}`);
    }
    return <div className={styles.topic_right} onClick={()=>{handleDispatch()}}>
        {topic.title}
    </div>
}