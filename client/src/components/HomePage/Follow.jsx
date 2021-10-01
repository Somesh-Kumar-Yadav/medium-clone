import React from "react";
import styles from "../../styles/HomePage.module.css";

export const Follow = ({ people }) => {
  
  return (
    <div className={styles.follow_person}>
      <span className={styles.follow_person_img}>
        <img
          src={people.imageUrl}
          alt=""
          onError={(e)=>{e.target.onerror = null; e.target.src="https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg"}}
        />
      </span>
      <span className={styles.follow_person_cont}>
        <span className={styles.follow_person_cont_1}>
          <span>
            <strong>{people.name}</strong>
          </span>
          <span>Author at Medium, Blogger</span>
        </span>
        <span className={styles.follow_person_cont_2}>Follow</span>
      </span>
    </div>
  );
};
