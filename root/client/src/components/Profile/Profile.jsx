import React from "react";
import "./styles.css";
import { GoogleLogout } from "react-google-login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/actions";
import { useHistory } from "react-router";

const Profile = () => {
  const user = useSelector((state) => state.auth.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutres = () => {
    alert("You have successfully Logged Out");
    dispatch(logoutUser());
    document.location.href = "http://localhost:3000";
  };
  return (
    <div>
      <div className="dropdown" style={{ float: "right" }}>
        <img className="profileimage" src={user.imageUrl} alt="" />
        <div className="dropdown_content">
          <div className="profileHeader">
            <img className="profilePic" src={user.imageUrl} alt="" />
            <h5>{user.name}</h5>
          </div>
          {/* <hr className="line" /> */}
          <p
            className="links"
            onClick={() => {
              history.push("/story");
            }}
          >
            Stories
          </p>
          <p
            className="links"
            onClick={() => {
              history.push("/newStory");
            }}
          >
            Write a Story
          </p>
          <p
            className="links"
            onClick={() => {
              history.push("/membership");
            }}
          >
            Membership
          </p>
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
