import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/HomePage.module.css";
import { topicSelect } from "../../redux/user/actions"
import axios from "axios";
import { useSelector } from "react-redux";
export const HomePageTopics = ({ topic }) => {
  const [selected, setSelected] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.user);
  const handleClick = () => {
    setSelected(true);
    axios.post(`http://localhost:2345/${user._id}/topic/${topic._id}`)
    dispatch(topicSelect(topic));
  }
  return <>
    {
      selected ? <span className={styles.home_page_topics_2}>
        {topic.title}
    </span>:<span onClick={handleClick} className={styles.home_page_topics}>
        {topic.title}
    </span>
    }
  </>
};
