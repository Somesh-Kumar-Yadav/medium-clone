import React from "react";
import styles from "../../styles/LoginSignup.module.css";
import GoogleLogin from "react-google-login";

const Signup = ({ swap, status }) => {
  const responseGoogle = (res) => {
    // console.log(res);
    let data = { ...res.profileObj, events: {} };
    // console.log(data);
    localStorage.setItem("login", JSON.stringify(data));
    setTimeout(() => {
      let data = JSON.parse(localStorage.getItem("login"));
      if (data) {
        alert("You have successfully Logged In");
        document.location.href = "http://localhost:3000";
      }
    }, 1000);
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.login_h2}>Join Medium.</h1>
      <GoogleLogin
        clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className={styles.btn}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <img
              className={styles.btn_image}
              src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"
              alt="img"
            />
            <p className={styles.btn_p}>Sign up with Google</p>
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // isSignedIn={true}
        cookiePolicy={"single_host_origin"}
      />
      <button className={styles.btn} disabled>
        <img
          className={styles.btn_image}
          src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          alt="img"
        />
        <p className={styles.btn_p}>Sign up with Facebook</p>
      </button>

      <button className={styles.btn} disabled>
        <img
          className={styles.btn_image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOnMWgt5ADlNxp1XuoV_3r0R6kRunqhBdMGMdGjbUrZbQFzESqux3XJtFV8MhF_T-Ocs&usqp=CAU"
          alt="img"
        />
        <p className={styles.btn_p}>Sign up with Email</p>
      </button>
      <h6 className={styles.login_h6}>
        Already have an account?{" "}
        <span onClick={() => swap(!status)} className={styles.login_h6_span}>
          Sign in
        </span>
      </h6>
    </div>
  );
};

export default Signup;
