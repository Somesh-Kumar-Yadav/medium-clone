import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useScrollPosition from "@react-hook/window-scroll";
import { blogsSingleSuccess, refreshData } from "../../redux/auth/actions";
import { Wrapper1 } from "../../styled-components/components";
import { useStyles1 } from "../../material-ui-components/components";

export const AboutAuthorWindow = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(data.claps);
  const [comments, setComments] = useState(data.comments);
  const [text, setText] = useState("");
  const user = useSelector((state) => state.auth.user.user);
  const dispatch = useDispatch();
  const handleClaps = () => {
    axios.patch(`http://localhost:2345/blogs/${data._id}`, {
      claps: likes + 1,
    });
    data.claps += 1;
    dispatch(blogsSingleSuccess(data));
    setLikes(likes + 1);
    dispatch(refreshData());
  };
  const handleComments = () => {
    axios.patch(`http://localhost:2345/blogs/${data._id}`, {
      comments: [{ author: user._id, text: text }],
    });
    data.comments = [
      ...data.comments,
      { author: { name: user.name, imageUrl: user.imageUrl }, text: text },
    ];
    dispatch(blogsSingleSuccess(data));
    setComments([
      ...comments,
      { author: { name: user.name, imageUrl: user.imageUrl }, text: text },
    ]);
    setText("");
    dispatch(refreshData());
  };
  let name;
  const classes = useStyles1();
  const scrollY = useScrollPosition(60 /*fps*/);
  if (data) {
    name = data.author.name;
  }
  return (
    <>
      {scrollY > 100
        ? data && (
            <Wrapper1>
              <div className="imgDiv">
                <img src={data.author.imageUrl} alt="" />
              </div>
              <p>{name}</p>
              <div className="icons">
                <div
                  className="pointer"
                  onClick={() => {
                    handleClaps();
                  }}
                >
                  {liked ? (
                    <i style={{ color: "red" }} className="fas fa-heart "></i>
                  ) : (
                    <i onClick={() => setLiked(true)} className="far fa-heart"></i>
                  )}
                  <p>{likes}</p>
                </div>
                <div className="pointer" onClick={() => setOpen(true)}>
                  <i className="far fa-comment"></i>

                  <p> {comments.length} </p>
                </div>
              </div>
            </Wrapper1>
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
              onClick={handleComments}
              className={classes.sendIcon}
            >
              <i class="fas fa-paper-plane"></i>
            </div>
            <input
              className={classes.input}
              type="text"
              name=""
              id=""
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="What's your thoughts"
            />
          </div>
          <div className={classes.comments}>
            {comments?.map((el) => (
              <div className={classes.commentsDiv}>
                <div className={classes.commentsHeader}>
                  <img
                    className={classes.img}
                    src={el.author.imageUrl}
                    alt=""
                  />
                  <p>{el.author.name}</p>
                </div>
                <div className={classes.text}>{el.text}</div>

                <div className={classes.icons}>
                  <i style={{ color: "red" }} className="far fa-heart"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};

