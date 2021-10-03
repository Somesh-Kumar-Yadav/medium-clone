import React from "react";
import { HomePageLeft } from "./HomePageLeft";
import { HomePageNavBar } from "./HomePageNavBar";
import { HomePageRight } from "./HomePageRight";
import styles from "../../styles/HomePage.module.css";
import { useDispatch } from "react-redux";
import { refreshData } from "../../redux/auth/actions";

export const HomePage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(refreshData())
  },[dispatch])
  return (
    <React.Fragment>
      <HomePageNavBar />
      <div className={styles.home_page_cont}>
        <HomePageLeft />
        <HomePageRight />
      </div>
    </React.Fragment>
  );
};
