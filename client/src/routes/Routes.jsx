import React from "react";
import { Route, Switch } from "react-router";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { WritePage } from "../pages/write/WritePage";
import { HomePage } from "../components/HomePage/HomePage";
import { OurStroryPage } from "../components/OurStoryPage/OurStoryPage";
import Membership from "../components/Membership/Membership";

export default function Routes() {
  let data = localStorage.getItem("login");
  //console.log("data", data);
  return (
    <>
      <Switch>
        <Route exact path="/">
          {data ? <HomePage data={data} /> : <LandingPage />}
        </Route>
        <Route path="/creator">
          <WritePage />
        </Route>
        <Route path="/story">
          <OurStroryPage />
        </Route>
        <Route path="/membership">
          <Membership />
        </Route>
      </Switch>
    </>
  );
}
