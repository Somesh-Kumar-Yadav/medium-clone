import React from "react"
import { HomePageTopics } from "./HomePageTopics"
import styles from "../../styles/HomePage.module.css"
import { Follow } from "./Follow"
import { useSelector } from "react-redux";

export const HomePageRight = () => {
    const topics = useSelector(state => state.user.topics)
    const people = useSelector(state => state.user.people)
    
    return <div className={styles.home_page_right}>
        <div className={styles.home_page_right_top}>
            <span className={styles.home_page_right_top_heading}>Recommended topics</span>
            <span className={styles.home_page_right_top_body}>
                {
                topics.map((item) => {
                    return <HomePageTopics key={item._id} topic={item}/>
                })
            }
            </span>
        </div>
        <div className={styles.home_page_right_top_2}>
            <span className={styles.home_page_right_top_heading}>Who To Follow</span>
            <span className={styles.home_page_right_top_body}>
                {
                people.map(item => {
                    return <Follow key={item._id} people={ item}/>
                })
            }
            </span>
        </div>
        <div className={styles.home_page_right_top_3}>
            <span className={styles.home_page_right_top_heading_2}>Reading list</span>
            <span  className={styles.home_page_right_top_body_2}>
                <span>Click the </span><svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#757575"></path></svg><span> on any story to easily add it to your reading list or a custom list that you can share.</span>
            </span>
        </div>
        <div className={styles.home_page_right_footer}>
            <p>Help</p>
            <p>Status</p>
            <p>Writers</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>About</p>
        </div>
    </div>
}