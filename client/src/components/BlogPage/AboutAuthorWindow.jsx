import styled from "styled-components";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
import Paper from "@material-ui/core/Paper";
import useScrollPosition from "@react-hook/window-scroll";

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

  .imgDiv {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

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
  const [active, setActive] = useState(false);
  const useStyles = makeStyles({
    drawerDiv: {
      fontSize: "1.3rem",
      margin: "5px",
      textAlign: "left",
      width: "400px",
      position: "relative",
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
      marign: "auto",
      boder: "1px solid red",
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
    sendIcon: {
      position: "absolute",
      top: "75px",
      right: "50px",
      cursor: "pointer",
    },
  });

  let name;
  let likes;
  let comments;

  const classes = useStyles();
  const scrollY = useScrollPosition(60 /*fps*/);
  if (data) {
    name = data.author.name;
    likes = 90;
    var imageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg";

    comments = [
      {
        urlImg:
          "https://miro.medium.com/fit/c/32/32/1*8xG4y5aHwBYGgTjE9Zr0VQ.jpeg",
        text: "I have one doubt about the first tip. If we create a base component and variant components, while searching in the Assests panel, it’ll display two components (both base component and variant’s first component). Is there any way to avoid that?",
        author: { name: "name" },
      },
    ];
  }

  const handleInp = (e) => {
    if (e.target.value !== "") {
      setActive(true);
    }
  };

  const handlePost = () => {};

  return (
    <>
      {scrollY > 350
        ? data && (
            <Wrapper>
              <p>{name}</p>
              <div className="imgDiv">
                <img src={imageUrl} alt="" />
              </div>
              <div className="follow">
                <button className="">Follow</button>
              </div>
              <div className="icons">
                <div>
                  <i class="fas fa-hand-holding-heart"></i>
                  <p>{likes}</p>
                </div>
                <div onClick={() => setOpen(true)}>
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
            <div
              onClick={handlePost}
              style={{ color: active ? "limegreen" : "black" }}
              className={classes.sendIcon}
            >
              <i class="fas fa-paper-plane"></i>
            </div>
            <input
              className={classes.input}
              onKeyDown={handleInp}
              type="text"
              name=""
              id=""
              placeholder="What's your thoughts"
            />
          </div>
          <div className={classes.comments}>
            {comments?.map((el) => (
              <div className={classes.commentsDiv}>
                <div className={classes.commentsHeader}>
                  <img className={classes.img} src={el.urlImg} alt="" />
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
