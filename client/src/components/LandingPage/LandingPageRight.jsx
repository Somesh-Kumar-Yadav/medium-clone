import React from "react";
import styles from "../../styles/LandingPage.module.css"
import { Topic } from "./Topic";

export const LandingPageBottomRight = () => {
    return <div className={styles.landingPageBottom_div_right}>
        <h5>
            DISCOVER MORE OF WHAT MATTERS TO YOU
        </h5>
        <div className={styles.landingPageBottom_div_right_bottom}>
            {Array(9).fill(0).map(item => {
                return <Topic/>
            })}
        </div>
        <div className={styles.footer_landing}>
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