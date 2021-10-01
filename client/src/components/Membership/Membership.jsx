import React from "react";
import styles from "./Membership.module.css";
import { NavBar } from "../LandingPage/NavBar";
import { useSelector } from 'react-redux';
import { HomePageNavBar } from "../HomePage/HomePageNavBar";


const Membership = () => {
  const auth = Boolean(useSelector(state => state.auth.isAuth))
  return (
    <div>
      {auth ? <HomePageNavBar color={"#4479FF" }/>:<NavBar color={"#4479FF"} />}
      <div className={styles.maindiv}>
        <p className={styles.heading}>Fuel great thinking.</p>
        <p className={styles.para}>
          Upgrade to membership for $5/month or $50/year.
        </p>
        <button className={styles.btn1}>Subscribe today</button>
      </div>
      <div className={styles.maindiv2}>
        <div className={styles.innerdiv}>
          <p className={styles.innerdivp1}>
            Get unlimited access to every story.
          </p>
          <img
            className={styles.innerdivimg}
            src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
            alt=""
          />
          <p className={styles.innerdivp2}>
            Read any article in our entire library across all your devices —
            with no paywalls, story limits or ads.
          </p>
        </div>
        <hr className={styles.line} />
        <div className={styles.innerdiv}>
          <p className={styles.innerdivp1}>
            Support the voices you want to hear more from.
          </p>
          <img
            className={styles.innerdivimg}
            src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
            alt=""
          />
          <p className={styles.innerdivp2}>
            A portion of your membership will directly support the writers and
            thinkers you read the most.
          </p>
        </div>
      </div>
      <div className={styles.maindiv3}>
        <p className={styles.maindiv3p1}>Why I'm a Medium Member...</p>
      </div>
      <div className={styles.maindiv4}>
        <p>Take your mind</p>
        <p>in new directions.</p>
        <button className={styles.btn}>Become a member</button>
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Membership;
