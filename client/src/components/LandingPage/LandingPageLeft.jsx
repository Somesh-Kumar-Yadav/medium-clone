import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/LandingPage.module.css"
import { BlogCard } from "./BlogCard";

export const LandingPageBottomLeft = () => {
    const blogs = useSelector(state => state.auth.blogs);
    return <div className={styles.landingPageBottom_div_left}>
        {blogs.map((item) => {
            return <BlogCard key={item._id} blog={ item}/>
        })}
    </div>
}