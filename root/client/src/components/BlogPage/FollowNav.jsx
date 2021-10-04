import { useDispatch, useSelector } from "react-redux";
import React from "react"
import styles from "../../styles/Blog.module.css"
import axios from "axios";
import { refreshData } from "../../redux/auth/actions";
import { Wrapper3 } from "../../styled-components/components";

export const FollowNav = ({ data }) => {
  const [val ,setVal] = React.useState(true)
  const [follow, setFollow] = React.useState(data.author.followers);
  const user = useSelector(state => state.auth.user.user);
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (follow.length && follow.includes(user._id)) {
      setVal(false);
    }
  },[user._id,follow])
  const handleFollow = () => {
    if (val) { 
      setFollow([...follow,user._id])
    }
    axios.post(`http://localhost:2345/${user._id}/follow/${data.author._id}`);
     dispatch(refreshData())
    setVal(false);
  }
  return (
    <>
      <Wrapper3 val={val}>
        <div className="flex">
          {val?<button className={styles.followbtn} onClick={handleFollow}>Follow</button>:<button className={styles.followedbtn} onClick={handleFollow}>Followed</button>}
          <p>{follow.length} Followers</p>
          <p> Editor's picks</p>
          <p>Recieve our newsletter</p>
          <p>Publish a story</p>
          <p> About </p>
        </div>
      </Wrapper3>
    </>
  );
};
