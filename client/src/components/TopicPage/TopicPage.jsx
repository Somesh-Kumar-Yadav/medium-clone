import React from "react";
import { useSelector } from "react-redux";
import styles from "./TopicPage.module.css";
import { BlogCard } from "../LandingPage/BlogCard";
import { HomePageTopics } from "../HomePage/HomePageTopics";
import { useLocation } from "react-router";
import { NavBar } from "../LandingPage/NavBar";

const TopicPage = () => {
  const location = useLocation();
  const { name } = location.state;
  const data = useSelector((state) => state.auth.blogs);
  const topics = useSelector((state) => state.auth.topics);

  //console.log(name);
  return (
    <div>
      <NavBar />
      <div className={styles.name}>
        <div className={styles.h2}>{name}</div>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.home_page_left_bottom}>
          {data.map((item) => {
            return <BlogCard key={item._id} blog={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
