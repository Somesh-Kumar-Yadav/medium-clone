import React from "react";
import styles from "../../styles/LandingPage.module.css"
import { convertDates } from "../../utils/convertDates";
import { convertMin } from "../../utils/convertMin";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { blogsSingleSuccess } from "../../redux/auth/actions";

export const TrendingCard = ({ num, blog }) => {
    const date = convertDates(blog.createdAt);
    const time = convertMin(blog.text);
  const dispatch = useDispatch();
    const history = useHistory();
    const handleBlog = () => {
    dispatch(blogsSingleSuccess(blog));
    history.push("/blogs");
  }
    return <div className={styles.trending_card}>
        <div className={styles.trending_card_1}>{num}</div>
        <div className={styles.trending_card_2}>
            <span className={styles.trending_card_2_1}>
                <img src={blog.author.imageUrl} alt=""></img>
                <h6>{blog.author.name}</h6>
            </span>
            <span onClick={handleBlog} className={styles.trending_card_2_2}>
                <h4>{blog.title}</h4>
            </span>
            <span className={styles.trending_card_2_3}>
               <p>{date} · {time} min read · </p>
                <svg width="15" height="15" viewBox="0 0 15 15" aria-label="Member only content">
                    <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z">
                    </path>
                </svg>
            </span>
        </div>
    </div>
}