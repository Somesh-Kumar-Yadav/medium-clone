import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoginSignup from "../LoginSignup/LoginSignup";
import { AboutAuthorWindow } from "./AboutAuthorWindow";
import { BlogBody } from "./BlogBody";
import { FollowNav } from "./FollowNav";

export const BlogPost = () => {

  useEffect(() => { }, []);
  const [open, setOpen] = useState(true);
  const data = useSelector((state) => state.auth.singleBlog);
  const user = useSelector((state) => state.auth.user.user);
  if (!user) {
    return <LoginSignup status={open} set={setOpen} />;
  }

  return (
    <div>
      <FollowNav data={data}/>
      <AboutAuthorWindow data={data} />
      <BlogBody data={data} />
    </div>
  );
};
// "6156b1e9b35627007c8aec4b"
