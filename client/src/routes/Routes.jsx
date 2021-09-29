import React from "react"
import { Route, Switch } from "react-router"
import { LandingPage } from "../components/LandingPage/LandingPage"
import {WritePage} from '../pages/write/WritePage'


export default function Routes() {
    return <>
        <Switch>
            <Route exact path="/"><LandingPage /></Route>
            <Route path="/creator"><WritePage/></Route>
    </Switch>
    </>
}