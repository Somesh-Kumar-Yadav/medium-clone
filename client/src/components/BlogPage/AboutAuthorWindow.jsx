import styled from "styled-components";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from "axios"
import { useDispatch ,useSelector} from "react-redux";
import useScrollPosition from "@react-hook/window-scroll";
import {blogsSingleSuccess} from "../../redux/auth/actions"

const Wrapper = styled.div`
  position: fixed;
  top: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 16%;
  height: 200px;
  left: 20px;
  color: rgb(117, 117, 117);
  .follow {
    display: flex;
  }
  button {
    background: rgb(0, 152, 201);
    padding: 10px 20px;
    border-radius: 18px;
    border: none;
    color: white;
  }
  .pointer{
    cursor:pointer;
  }
  .subscribe {
    padding: 10px 10px;
    border-radius: 50%;
  }
  .icons {
    display: flex;
    font-size: 1rem;
    justify-content: space-around;
    width: 100%;
    border-top: 1px solid rgb(230, 230, 230);
    div {
      margin: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        padding: 0px 10px;
        font-size: 1.2rem;
      }
    }
  }
`;

export const AboutAuthorWindow = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(data.claps);
  const [comments, setComments] = useState(data.comments);
  const [text,setText] = useState("")
  const user = useSelector(state => state.auth.user.user);
  const dispatch = useDispatch();
  console.log(data);
  const handleClaps = () => {
    axios.patch(`http://localhost:2345/blogs/${data._id}`, { claps: likes + 1 });
    data.claps += 1;
    dispatch(blogsSingleSuccess(data))
    setLikes(likes + 1);
  }
  const handleComments = () => {
    axios.patch(`http://localhost:2345/blogs/${data._id}`, {"comments":[{"author":"6156a349b35627007c8aec34","text":"First Comment"}]});
    data.comments = [...data.comments,{author:{name:user.name,imageUrl:user.imageUrl},text:text}];
    dispatch(blogsSingleSuccess(data))
    setComments([...comments, { author: { name: user.name, imageUrl: user.imageUrl }, text: text }]);
    setText("")
  }
  const useStyles = makeStyles({
    drawerDiv: {
      fontSize: "1.3rem",
      margin: "5px",
      textAlign: "left",
      width: "400px",
    },

    header: {
      width: "90%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 10px",
    },

    inpDiv: {
      width: "90%",
      margin: "auto",
      // border: "1px solid red",
      display:"flex"
    },

    inpBtn: {
      marginTop: "20px",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      marginBottom: "40px",
      margin: "10px",
      height: "43px",
      fontSize: "20px",
      width: "43px",
      borderRadius: "50%",
      color: "white",
      background: "green",
      border: "none",
      cursor:"pointer"
    },
    input: {
      height: "30px",
      padding: "20px 20px",
      width: "95%",
      marginLeft: "8%",
      marginTop: "20px",
      marginBottom: "40px",
    },

    comments: {
      borderBottom: "solid 1px rgb(230, 230, 230)",
    },
    commentsDiv: {
      width: "90%",
      margin: "auto",
      fontSize: "0.9rem",
    },
    commentsHeader: {
      display: "flex",
      alignItems: "center",
    },
    img: {
      width: "30px",
      borderRadius: "50%",
      margin: "30px 10px",
    },
    icons: {
      fontSize: "1.1rem",
      padding: "20px 0px",
    },
  });

  let name;

  const classes = useStyles();
  const scrollY = useScrollPosition(60 /*fps*/);
  if (data) {
    name = data.author.name;
    
  }

  return (
    <>
      {scrollY > 100
        ? data && (
            <Wrapper>
              <p>{name}</p>
              <div className="follow">
                <button className="">Follow</button>
              </div>
              <div className="icons">
              <div className="pointer" onClick={() => {handleClaps()}}>
                  <i class="fas fa-hand-holding-heart"></i>
                  <p>{likes}</p>
                </div>
                <div className="pointer" onClick={() => setOpen(true)}>
                  <i class="far fa-comment"></i>

                  <p> {comments.length} </p>
                </div>
              </div>
            </Wrapper>
          )
        : null}

      <SwipeableDrawer
        className={classes.drawer}
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
      >
        <div className={classes.drawerDiv}>
          <div className={classes.header}>
            <h4> Responses {`(${comments?.length})`} </h4>

            <i onClick={() => setOpen(false)} class="fas fa-times"></i>
          </div>
          <div className={classes.inpDiv}>
            <input
              className={classes.input}
              type="text"
              name=""
              id=""
              value={text}
              onChange={(e)=>{setText(e.target.value)}}
              placeholder="What's your thoughts"
            />
            <button onClick={handleComments} className={classes.inpBtn}>&gt;</button>
          </div>
          <div className={classes.comments}>
            {comments?.map((el) => (
              <div className={classes.commentsDiv}>
                <div className={classes.commentsHeader}>
                  <img className={classes.img} src={el.author.imageUrl} alt="" />
                  <p>{el.author.name}</p>
                </div>
                <div>{el.text}</div>

                <div className={classes.icons}>
                  <i class="fas fa-hand-holding-heart"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};

// temp
