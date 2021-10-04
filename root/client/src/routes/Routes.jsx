import React from "react";
import { Route, Switch } from "react-router";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { WritePage } from "../pages/write/WritePage";
import { HomePage } from "../components/HomePage/HomePage";
import { OurStroryPage } from "../components/OurStoryPage/OurStoryPage";
import { CreateStrory } from "../pages/createStory/CreateStrory";
import Membership from "../components/Membership/Membership";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/auth/actions";
import { BlogPost } from "../components/BlogPage/BlogPage";
import { Loading } from "../components/HomePage/Loading";
import TopicPage from "../components/TopicPage/TopicPage";

export default function Routes() {
  const auth = Boolean(useSelector((state) => state.auth.isAuth));
  const load = Boolean(useSelector((state) => state.auth.isLoading));
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  if (load) {
    return <Loading />;
  }
  return (
    <>
      <Switch>
        <Route exact path="/">
          {auth ? <HomePage /> : <LandingPage />}
        </Route>
        <Route path="/creator">
          <WritePage />
        </Route>
        <Route path="/topic/:topic">
          <TopicPage />
        </Route>
        <Route path="/story">
          <OurStroryPage />
        </Route>
        <Route path="/newStory">
          <CreateStrory />
        </Route>
        <Route path="/membership">
          <Membership />
        </Route>
        <Route path="/blogs">
          <BlogPost />
        </Route>
      </Switch>
    </>
  );
}
