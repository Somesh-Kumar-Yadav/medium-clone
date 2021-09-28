import React from "react"
import { Header } from "./Header";
import { LandingPageBottom } from "./LandingPageBottom";
import { NavBar } from "./NavBar";
import { Trending } from "./Trending";

export const LandingPage = () => {
    return <React.Fragment>
        <NavBar />
		<Header />
		<Trending />
		<LandingPageBottom />
    </React.Fragment>
}