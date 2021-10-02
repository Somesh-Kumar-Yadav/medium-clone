import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AboutAuthorWindow } from "./AboutAuthorWindow";
import { BlogBody } from "./BlogBody";
import { FollowNav } from "./FollowNav";

export const BlogPost = () => {
  useEffect(() => {}, []);

  const blogs = useSelector((state) => state.auth.blogs);

  console.log(blogs);

  let data = blogs[0];
  console.log(blogs);
  return (
    <div>
      <FollowNav />
      <AboutAuthorWindow data={data} />
      <BlogBody data={data} />
    </div>
  );
};
// "6156b1e9b35627007c8aec4b"
