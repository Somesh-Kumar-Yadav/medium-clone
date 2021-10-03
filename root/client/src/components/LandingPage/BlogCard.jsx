import React from "react";
import styles from "../../styles/LandingPage.module.css";
import { convertDates } from "../../utils/convertDates";
import { convertMin } from "../../utils/convertMin";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allTopicBlogs, blogsSingleSuccess } from "../../redux/auth/actions";

export const BlogCard = ({ blog }) => {
  const date = convertDates(blog.createdAt);
  const time = convertMin(blog.text);
  const dispatch = useDispatch();
    const history = useHistory();
    const handleDispatch = (title) => {
        dispatch(allTopicBlogs({topic:title}));
      history.push(`/topic/${title}`);
    }
  const handleBlog = () => {
    dispatch(blogsSingleSuccess(blog));
    history.push("/blogs");
  }
  return (
    <div className={styles.blog_card}>
      <div className={styles.blog_card_2}>
        <span className={styles.blog_card_2_1}>
          <img
            src={blog.author.imageUrl}
            alt=""
          ></img>
          <h6>{blog.author.name}</h6>
        </span>
        <span onClick={handleBlog} className={styles.blog_card_2_2}>
          <h4>{blog.title}</h4>
        </span>
        <span className={styles.blog_card_2_4}>
          <p>{blog.description}</p>
        </span>
        <span className={styles.blog_card_2_3}>
          <span>
            <p>{date} · {time} min read · </p>
            <span onClick={() => { handleDispatch(blog.topic.title)}}>{blog.topic.title}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              aria-label="Member only content"
            >
              <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
            </svg>
          </span>
          <span>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path
                d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                fill="#757575"
              ></path>
            </svg>
          </span>
        </span>
      </div>
      <div onClick={handleBlog} className={styles.blog_card_1}>
        <img
          src={blog.featureImg}
          alt=""
        ></img>
      </div>
    </div>
  );
};
