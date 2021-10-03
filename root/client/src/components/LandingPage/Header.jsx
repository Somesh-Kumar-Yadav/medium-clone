import React from "react";
import { Head } from "../../styled-components/components";
import styles from "../../styles/LandingPage.module.css"
import { useHistory } from "react-router";
export const Header = () => {
    const history = useHistory()
    return <React.Fragment>
        <Head color="#C4E2FF">
            <div className={styles.header_block}>
                <div>
                    <h2>
                        Medium is a place to write, read, and connect
                    </h2>
                    <h4>
                        It's easy and free to post your thinking on any topic and connect with millions of readers.
                    </h4>
                    <span onClick={()=>{history.push("/newStory")}}>
                        Start Writing
                    </span>
                </div>
            </div>
            <img className={styles.header_bg} src={process.env.PUBLIC_URL+`/images/header_bg.png`} alt=""/>
        </Head>
    </React.Fragment>
}