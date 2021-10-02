import React from "react";
import styles from "../../styles/HomePage.module.css";
import axios from "axios";
import { useSelector } from "react-redux";

export const Follow = ({ people }) => {
  const [follow, setFollow] = React.useState(false);
  const user = useSelector(state=>state.auth.user.user)
  const handleClick = () => {
    if (!follow) {
      axios.post(`http://localhost:2345/${user._id}/follow/${people._id}`);
    }
    setFollow(true);
  }
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
        <span onClick={handleClick} className={styles.follow_person_cont_2}>{follow?"Followed":"Follow"}</span>
      </span>
    </div>
  );
};
