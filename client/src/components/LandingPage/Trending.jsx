import React from "react";
import { TrendingCard } from "./TrendingCard";
import styles from "../../styles/LandingPage.module.css"
import { useSelector } from "react-redux";

export const Trending = () => {
    const trending = useSelector(state => state.auth.trending)
    return <div className={styles.trending_div}>
            <span className={styles.trending_div_title}>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path fill="#fff" d="M0 .8h28v28H0z"></path>
                    <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
                        <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                        <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                        <path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" strokeLinecap="round"></path>
                    </g>
                    <defs>
                        <clipPath>
                            <path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
                <h5>Trending on Medium</h5>
            </span>
            <span className={styles.trending_div_body}>
                {trending.map((item,i) => {
                    return <TrendingCard key={item._id} blog={item} num={"0"+(i+1)}/>
                })}
            </span>
        </div>
}