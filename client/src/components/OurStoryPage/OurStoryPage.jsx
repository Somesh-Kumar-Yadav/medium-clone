import { Description } from "./OurPageInner/Description";
import { Heading } from "./OurPageInner/Heading";
import { LearnMore } from "./OurPageInner/LearnMore";
import { Network } from "./OurPageInner/Network";
import { Testimony } from "./OurPageInner/Testimony";

export const OurStroryPage = () => {
  return (
    <div>
      <Heading />
      <Description />
      <Network />
      <Testimony />
      <LearnMore />
    </div>
  );
};
