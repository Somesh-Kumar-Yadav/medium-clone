import { LearnMoreWrapper, SvgCubeWrapper } from "../../../styled-components/components";

export const LearnMore = () => {
  return (
    <>
      <LearnMoreWrapper>
        <div className="header">
          <p> Learn more about us. Or join us.</p>
        </div>
        <div className="divWrap">
          <div className="secDiv">
            <h4>The Medium blog.</h4>
            <p>
              {" "}
              Visit our company blog for the latest news, product updates, and
              tips and tricks.
            </p>
            <button> Read our blog</button>
          </div>
          <div className="secDiv2">
            <h4>Work at Medium</h4>
            <p>
              {" "}
              Our team is home to engineers, journalists, artists, and creatives
              of all stripes.
            </p>
            <button className="positions"> View open positions</button>
          </div>
        </div>
      </LearnMoreWrapper>
      <SvgCubeWrapper>
        <div className="cube">
          <iframe
            src="https://player.vimeo.com/video/448735219?api=1&background=1&mute=1&loop=1"
            frameBorder="0"
            title="svg cube"
            width="500"
            height="500"
          ></iframe>
        </div>
        <div className="register">
          <p>Read, write, and expand your world.</p>
          <button> Get started</button>
        </div>
      </SvgCubeWrapper>
    </>
  );
};

