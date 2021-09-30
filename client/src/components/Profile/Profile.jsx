import React from "react";
import "./styles.css";
import { GoogleLogout } from "react-google-login";
import GoogleButton from "react-google-button";

const Profile = ({ data }) => {
  const logoutres = () => {
    alert("You have successfully Logged Out");
    localStorage.removeItem("login");
    document.location.href = "http://localhost:3000";
  };
  return (
    <div>
      <div className="dropdown" style={{ float: "right" }}>
        <img className="profileimage" src={data.imageUrl} alt="" />
        <div className="dropdown_content">
          <div className="profileHeader">
            <img className="profilePic" src={data.imageUrl} alt="" />
            <h5>{data.name}</h5>
          </div>
          <hr className="line" />
          <a href="#">Stories</a>
          <a href="#">Write a Story</a>
          <div>
            <GoogleLogout
              clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
              tag="p"
              render={(renderProps) => (
                <button
                  className="logoutbtn"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign Out
                </button>
              )}
              className="googleout"
              icon={false}
              onLogoutSuccess={logoutres}
            >
              <p>Sign out</p>
            </GoogleLogout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
