import styled from "styled-components";

const Wrapper = styled.div`
  height: 300px;
  width: 100%;

  .fontTest {
    font-family: "GT-Super-Text-Book";
    font-size: 2.9rem;
    font-weight: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 120px 0px;
    line-height: 2.9rem;
    color: rgb(51, 51, 51);
  }

  .spanClass {
    color: black;
    font-weight: 500;
  }
`;

export const Heading = () => {
  return (
    <Wrapper>
      <div className="fontTest">
        <h1>
          {" "}
          Every idea needs a <span className="spanClass"> Medium. </span>{" "}
        </h1>
      </div>
    </Wrapper>
  );
};
