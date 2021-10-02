import styled from "styled-components";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
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

export const AboutAuthorWindow = (
  {
    //   name,
    //   about,
    //   followers,
    //   likes,
    //   comments,
  }
) => {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles({
    drawerDiv: {
      fontSize: "1.3rem",
      margin: "5px",
      textAlign: "left",
      color: "rgb(240,0,84)",
    },
    p: {
      padding: "10px 15px",
      color: "rgb(15, 20, 30);",
    },
  });

  const classes = useStyles();
  const scrollY = useScrollPosition(60 /*fps*/);

  return (
    <>
      {scrollY > 350 ? (
        <Wrapper>
          <p>{name}</p>
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

              <p> {comments} </p>
            </div>
          </div>
        </Wrapper>
      ) : null}

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
          <Paper>
            <h1> Comments Section</h1>
          </Paper>
        </div>
      </SwipeableDrawer>
    </>
  );
};

// temp
const name = "author name";
const likes = 11;
const comments = 5;
