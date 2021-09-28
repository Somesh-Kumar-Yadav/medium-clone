import React from "react"
import { Route, Switch } from "react-router"
import { LandingPage } from "../components/LandingPage/LandingPage"


export default function Routes() {
    return <>
        <Switch>
            <Route exact path="/"><LandingPage/></Route>
    </Switch>
    </>
}