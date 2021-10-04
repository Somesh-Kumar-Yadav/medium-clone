import React from "react";
import styles from "../../styles/HomePage.module.css";
export const Loading = () => {
    return<div className={styles.loading_logo}>
            <iframe 
            src="https://player.vimeo.com/video/448735219?api=1&background=1&mute=1&loop=1"
            frameBorder="0"
            title="svg cube"
            width="500"
            height="500"
          ></iframe>
        </div >
}
