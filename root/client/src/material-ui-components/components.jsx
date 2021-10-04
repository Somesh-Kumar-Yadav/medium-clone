import { makeStyles } from "@material-ui/core/styles";

export const useStyles1 = makeStyles({
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

    inpBtn: {
      marginTop: "20px",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "40px",
      margin: "10px",
      height: "43px",
      fontSize: "20px",
      width: "43px",
      borderRadius: "50%",
      color: "white",
      background: "green",
      border: "none",
      cursor: "pointer",
    },

    comments: {},
    commentsDiv: {
      borderBottom: "solid 1px rgb(230, 230, 230)",
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
      padding: "20px 15px",
      display: "flex",
      justifyContent: "flex-end",
    },
    sendIcon: {
      position: "absolute",
      top: "75px",
      right: "50px",
      cursor: "pointer",
       color:"rgb(26,137,23)"
    },
    text: {
      margin: "0px 15px",
      fontSize: "1rem",
    },
  });