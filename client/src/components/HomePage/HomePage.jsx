import React from "react";
import { HomePageLeft } from "./HomePageLeft";
import { HomePageNavBar } from "./HomePageNavBar";
import { HomePageRight } from "./HomePageRight";
import styles from "../../styles/HomePage.module.css";

export const HomePage = ({ data }) => {
  return (
    <React.Fragment>
      <HomePageNavBar data={data} />
      <div className={styles.home_page_cont}>
        <HomePageLeft />
        <HomePageRight />
      </div>
    </React.Fragment>
  );
};
