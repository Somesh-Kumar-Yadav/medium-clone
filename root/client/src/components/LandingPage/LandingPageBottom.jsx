import React from "react";
import styles from "../../styles/LandingPage.module.css"
import { LandingPageBottomLeft } from "./LandingPageLeft";
import { LandingPageBottomRight } from "./LandingPageRight";

export const LandingPageBottom = () => {
    return <div className={styles.landingPageBottom_div}>
        <LandingPageBottomLeft/>
        <LandingPageBottomRight/>
    </div>
}