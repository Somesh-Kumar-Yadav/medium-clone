import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 1.1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
  .svgSphere {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;
  }
`;

export const Description = () => {
  return (
    <>
      <Wrapper>
        <div style={{ width: "75%", margin: "auto" }}>
          <p style={{ paddingTop: "30px" }}>
            The best ideas can change who we are. Medium is where those ideas
            take shape, take off, and spark powerful conversations. We’re an
            open platform where over 100 million readers come to find insightful
            and dynamic thinking. Here, expert and undiscovered voices alike
            dive into the heart of any topic and bring new ideas to the surface.
            Our purpose is to spread these ideas and deepen understanding of the
            world.
          </p>
          <br />
          <p style={{ paddingBottom: "30px" }}>
            {" "}
            We’re creating a new model for digital publishing. One that supports
            nuance, complexity, and vital storytelling without giving in to the
            incentives of advertising. It’s an environment that’s open to
            everyone but promotes substance and authenticity. And it’s where
            deeper connections forged between readers and writers can lead to
            discovery and growth. Together with millions of collaborators, we’re
            building a trusted and vibrant ecosystem fueled by important ideas
            and the people who think about them.
          </p>
        </div>
        <div className="svgSphere">
          <iframe
            title="svg Sphere"
            src="https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1"
            frameBorder="0"
            style={{ height: "400px", width: "400px" }}
          ></iframe>
        </div>
      </Wrapper>
    </>
  );
};
