import React from "react"
import styles from "../../styles/HomePage.module.css"

export const Follow = () => {
    return <div className={styles.follow_person}>
        <span className={styles.follow_person_img}>
            <img src="https://miro.medium.com/fit/c/48/48/1*AwBz4NW9_M45J-sBlmH-lA.png" alt="" />
        </span>
        <span className={styles.follow_person_cont}>
            <span className={styles.follow_person_cont_1}>
                <span><strong>Barack Obama</strong></span>
                <span>Dad, husband, President, Citizen</span>
            </span>
            <span className={styles.follow_person_cont_2}>
                Follow
            </span>
        </span>
    </div>
}