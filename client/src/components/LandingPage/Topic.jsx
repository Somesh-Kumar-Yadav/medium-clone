import React from "react";
import styles from "../../styles/LandingPage.module.css"

export const Topic = ({topic}) => {
    return <div className={styles.topic_right}>
        {topic.title}
    </div>
}