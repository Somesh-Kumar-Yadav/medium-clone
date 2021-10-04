import { useState } from "react";
import { useSelector } from "react-redux";
import LoginSignup from "../LoginSignup/LoginSignup";
import { AboutAuthorWindow } from "./AboutAuthorWindow";
import { BlogBody } from "./BlogBody";
import { FollowNav } from "./FollowNav";
import { NavBar } from "../LandingPage/NavBar";
import { HomePageNavBar } from "../HomePage/HomePageNavBar";

export const BlogPost = () => {
  const [open, setOpen] = useState(true);
  const data = useSelector((state) => state.auth.singleBlog);
  const auth = Boolean(useSelector(state => state.auth.isAuth))
  const user = useSelector((state) => state.auth.user.user);
  if (!user) {
    return <LoginSignup status={open} set={setOpen} />;
  }
  return (
    <div>
      {auth ? <HomePageNavBar/>:<NavBar />}
      <FollowNav data={data}/>
      <AboutAuthorWindow data={data} />
      <BlogBody data={data} />
    </div>
  );
};
