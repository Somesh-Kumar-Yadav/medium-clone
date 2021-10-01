import React from "react"
import styles from "../../styles/HomePage.module.css"

export const HomePageTopics = ({ topic }) => {
    return <span className={styles.home_page_topics}>
        {topic.title}
    </span>
}