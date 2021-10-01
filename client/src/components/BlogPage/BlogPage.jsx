import { AboutAuthorWindow } from "./AboutAuthorWindow";
import { BlogBody } from "./BlogBody";
import { FollowNav } from "./FollowNav";

export const BlogPost = () => {
  return (
    <div>
      <FollowNav />
      <AboutAuthorWindow />
      <BlogBody />
    </div>
  );
};
