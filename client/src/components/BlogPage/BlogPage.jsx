import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AboutAuthorWindow } from "./AboutAuthorWindow";
import { BlogBody } from "./BlogBody";
import { FollowNav } from "./FollowNav";

export const BlogPost = () => {
  const blogs = useSelector((state) => state.auth.blogs);

  let data = blogs[0];
  useEffect(() => {}, []);

  return (
    <div>
      <FollowNav />
      <AboutAuthorWindow />
      <BlogBody data={data} />
    </div>
  );
};
// "6156b1e9b35627007c8aec4b"
