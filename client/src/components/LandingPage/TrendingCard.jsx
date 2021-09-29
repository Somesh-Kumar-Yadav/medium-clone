import React from "react";
import styles from "../../styles/LandingPage.module.css"

export const TrendingCard = ({ num }) => {
    return <div className={styles.trending_card}>
        <div className={styles.trending_card_1}>{num}</div>
        <div className={styles.trending_card_2}>
            <span className={styles.trending_card_2_1}>
                <img src="https://miro.medium.com/fit/c/20/20/1*isyyZjEsBA-_thOn2ksrmQ.png" alt=""></img>
                <h6>Here comes the author of blog</h6>
            </span>
            <span className={styles.trending_card_2_2}>
                <h4>Here will be the title of the blog</h4>
            </span>
            <span className={styles.trending_card_2_3}>
               <p>Sep 18 · 4 min read</p>
                <svg width="15" height="15" viewBox="0 0 15 15" aria-label="Member only content">
                    <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z">
                    </path>
                </svg>
            </span>
        </div>
    </div>
}