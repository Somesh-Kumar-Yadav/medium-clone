import React from "react";
import { Route, Switch } from "react-router";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { WritePage } from "../pages/write/WritePage";
import { HomePage } from "../components/HomePage/HomePage";
import { OurStroryPage } from "../components/OurStoryPage/OurStoryPage";
import { CreateStrory } from "../pages/createStory/CreateStrory";
import Membership from "../components/Membership/Membership";
import { useSelector } from "react-redux";

export default function Routes() {
  const auth = Boolean(useSelector((state) => state.auth.isAuth));
  return (
    <>
      <Switch>
        <Route exact path="/">
          {auth ? <HomePage /> : <LandingPage />}
        </Route>
        <Route path="/creator">
          <WritePage />
        </Route>
        <Route path="/story">
          <OurStroryPage />
        </Route>
        <Route path="/newStory">
          <CreateStrory/>
          </Route>
        <Route path="/membership">
          <Membership />
        </Route>
      </Switch>
    </>
  );
}
