import React from "react";
import styles from "./Membership.module.css";
import { NavBar } from "../LandingPage/NavBar";

const Membership = () => {
  return (
    <div>
      <NavBar color={"#4479FF"} />
      <div className={styles.maindiv}>
        <p className={styles.heading}>Fuel great thinking.</p>
        <p className={styles.para}>
          Upgrade to membership for $5/month or $50/year.
        </p>
        <button className={styles.btn1}>Subscribe today</button>
      </div>
    </div>
  );
};

export default Membership;
