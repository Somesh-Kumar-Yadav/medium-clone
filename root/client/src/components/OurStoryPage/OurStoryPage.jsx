import { NavBar } from "../LandingPage/NavBar";
import { Description } from "./OurPageInner/Description";
import { Heading } from "./OurPageInner/Heading";
import { LearnMore } from "./OurPageInner/LearnMore";
import { Network } from "./OurPageInner/Network";
import { Testimony } from "./OurPageInner/Testimony";
import { HomePageNavBar } from "../HomePage/HomePageNavBar";
import { useSelector } from "react-redux";

export const OurStroryPage = () => {
  const auth = Boolean(useSelector((state) => state.auth.isAuth));
  return (
    <div>
      {auth ? <HomePageNavBar color={"white"} /> : <NavBar color="white" />}
      <Heading />
      <Description />
      <Network />
      <Testimony />
      <LearnMore />
    </div>
  );
};
