import React from "react";
import styles from "../../styles/LandingPage.module.css"
import { BlogCard } from "./BlogCard";

export const LandingPageBottomLeft = () => {
    return <div className={styles.landingPageBottom_div_left}>
        {Array(10).fill(0).map((item,i) => {
            return <BlogCard key={i}/>
        })}
    </div>
}