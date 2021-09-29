import React from "react";
import styles from "../../styles/Profile.module.css";

const Profile = ({ data }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <img className={styles.profileImage} src={data.imageUrl} alt="" />
        <h4>{data.name}</h4>
        <p>{data.email}</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.base}>
        <p className={styles.links}>Write a story</p>
        <p className={styles.links}>Stories</p>
        <p className={styles.links}>Settings</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.base}>
        <p className={styles.links}>Write a story</p>
        <p className={styles.links}>Write a story</p>
        <p className={styles.links}>Write a story</p>
        <p className={styles.links}>Write a story</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.base}>
        <p className={styles.links}>Write a story</p>
        <p className={styles.links}>Write a story</p>
        <p className={styles.links}>Sign out</p>
      </div>
    </div>
  );
};

export default Profile;
