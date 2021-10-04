import React from "react";
import {  useSelector } from "react-redux";
import styles from "./TopicPage.module.css";
import { BlogCard } from "../LandingPage/BlogCard";
import {  useParams } from "react-router";
import { NavBar } from "../LandingPage/NavBar";
import { HomePageNavBar } from "../HomePage/HomePageNavBar";

const TopicPage = () => {
  const { topic } = useParams();
  const auth = Boolean(useSelector(state => state.auth.isAuth))
  const data = useSelector((state) => state.auth.topicBlogs);
  //console.log(data)
  return (
    <div>
       {auth ? <HomePageNavBar/>:<NavBar />}
      <div className={styles.name}>
        <div className={styles.h2}>{topic}</div>
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
