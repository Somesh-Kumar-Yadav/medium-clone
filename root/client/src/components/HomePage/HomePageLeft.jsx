import React from "react";
import styles from "../../styles/HomePage.module.css";
import { HomePageTopics } from "./HomePageTopics";
import { BlogCard } from "../LandingPage/BlogCard";
import { Tabs } from "../../styled-components/components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allTopicBlogs } from "../../redux/auth/actions";

export const HomePageLeft = () => {
  const [tabs, setTabs] = React.useState(true);
  const followedBlogs = useSelector((state) => state.user.blogs);
  const blogs = useSelector((state) => state.auth.blogs);
  const topics = useSelector(state => state.user.followingTopics);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleNav = (title) => {
      dispatch(allTopicBlogs({topic:title}));
      history.push(`/topic/${title}`);
  }
  return (
    <div className={styles.home_page_left}>
      <div className={styles.home_page_left_top}>
        <span className={styles.home_topics_heading}>Your Topics</span>
        {topics.map((item, i) => {
          return <div key={i} onClick={() => { handleNav(item.title)}}><HomePageTopics topic={item} /></div>;
        })}
      </div>
      <div className={styles.home_page_left_mid}>
        <Tabs onClick={() => setTabs(false)} tab={tabs} val={false}>
          Following
        </Tabs>
        <Tabs onClick={() => setTabs(true)} tab={tabs} val={true}>
          Recommended for you
        </Tabs>
      </div>
      {tabs ? (
        <div className={styles.home_page_left_bottom}>
          {blogs.map((item) => {
            return <BlogCard key={item._id} blog={item} />;
          })}
        </div>
      ) : (
        <div className={styles.home_page_left_bottom}>
          {followedBlogs.map((item) => {
            return <BlogCard key={item._id} blog={item} />;
          })}
        </div>
      )}
    </div>
  );
};
