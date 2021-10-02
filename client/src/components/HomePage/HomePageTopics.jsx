import React from "react";
import styles from "../../styles/HomePage.module.css";
import { Link } from "react-router-dom";

export const HomePageTopics = ({ topic }) => {
  return (
    <span className={styles.home_page_topics}>
      <Link
        style={{ textDecoration: "none", color: "rgb(58, 57, 57)" }}
        to={{ pathname: `/${topic.title}`, state: { name: topic.title } }}
      >
        {topic.title}
      </Link>
    </span>
  );
};
