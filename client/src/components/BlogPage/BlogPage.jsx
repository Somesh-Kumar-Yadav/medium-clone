import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AboutAuthorWindow } from "./AboutAuthorWindow";
import { BlogBody } from "./BlogBody";
import { FollowNav } from "./FollowNav";

export const BlogPost = () => {
  useEffect(() => {}, []);
  const data = useSelector((state) => state.auth.singleBlog);  
  return (
    <div>
      <FollowNav />
      <AboutAuthorWindow data={data} />
      <BlogBody data={data} />
    </div>
  );
};
// "6156b1e9b35627007c8aec4b"
