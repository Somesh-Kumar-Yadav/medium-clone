import { BannerWrapper, SubBannerBlockWrapper, Wrapper7 } from "../../../styled-components/components";

const header = "Create the space for your thinking to take off.";
const body =
  "A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.";

const header2 = "Get more with membership.";
const body2 =
  "Become a Medium member to enjoy unlimited access for $5/month and directly support the writers you read most.";

export const Testimony = () => {
  return (
    <>
      <Wrapper7>
        <div className="headerDiv">
          <div className="headerDivLeft">
            <p>Over 100 million readers and growing.</p>
          </div>
          <div className="headerDivRight">
            <img src="https://via.placeholder.com/50" alt="" />
            <p>
              "There’s no other place that combines such an excellent level of
              writing with a truly engaged and active community. Medium is truly
              where ideas are born, shared, and spread."
              <span> Jasmine Bina </span>
            </p>
          </div>
        </div>

        <Banner
          header={header}
          body={body}
          button={"Write on Medium"}
          color={"rgb(52,162,69)"}
          background={"black"}
          font={"white"}
        />
        <Banner
          header={header2}
          body={body2}
          button={"See member options"}
          color={"black"}
          font={"black"}
          background={"rgb(52,162,69)"}
          fontColor={"white"}
          width={"60%"}
        />
      </Wrapper7>
      <SubBannerBlock />
    </>
  );
};

export const Banner = ({
  header,
  body,
  button,
  color,
  background,
  font,
  fontColor,
  width,
}) => {
  return (
    <>
      <BannerWrapper
        color={color}
        background={background}
        font={font}
        fontColor={fontColor}
        width={width}
      >
        <p className="netWorkHeader"> {header} </p>
        <p className="netWorkBody"> {body}</p>
        <button>{button}</button>
      </BannerWrapper>
    </>
  );
};

export const SubBannerBlock = () => {
  return (
    <>
      <SubBannerBlockWrapper>
        <div className="firstDiv">
          <p className="header"> Read as much as you want. </p>
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/about/images/UnlimitedReading.svg"
            alt=""
          />
          <p>
            {" "}
            Enjoy unlimited access to every story across all of your devices.
          </p>
        </div>
        <div className="secondDiv">
          <p className="header"> Reward quality content. </p>
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/about/images/SupportWriters.svg"
            alt=""
          />
          <p>
            {" "}
            Your membership helps us pay writers, and keeps your experience
            ad-free.
          </p>
        </div>
      </SubBannerBlockWrapper>
    </>
  );
};
