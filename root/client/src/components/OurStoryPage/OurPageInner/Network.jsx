import styled from "styled-components";
import { Profiles } from "./Profiles";

const Wrapper = styled.div`
  width: 100%;
  background: rgb(255, 209, 185);
  text-align: center;

  .netWorkHeader {
    width: 65%;
    margin: auto;
    font-size: 6rem;
    line-height: 6rem;
    font-family: "GT-Super-Text-Book";
    font-weight: 600;
    p {
      padding-top: 70px;
    }
  }
  .netWorkBody {
    width: 45%;
    margin: 15px auto;
    font-size: 1.05rem;
  }
  .profiles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    row-gap: 0px;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 70px auto;
  }
  .filler {
    color: rgb(255, 209, 185);
  }
`;

const arr = [
  "Erica Dhawan",
  "Devon Prince",
  "GEN",
  "Scot Gallow",
  "Kaki Okumuru",
  "Hal H. Harris",
  "OneZero",
  "Carvell Wallace",
  "Elemental",
  "Sarah Cottrell",
  "Forge",
  "LEVEL",
];

export const Network = () => {
  return (
    <>
      <Wrapper>
        <div>
          <div className="netWorkHeader">
            <p>A living network of curious minds.</p>
          </div>
          <p className="netWorkBody">
            Anyone can write on Medium. Thought-leaders, journalists, experts,
            and individuals with unique perspectives share their thinking here.
            You’ll find pieces by independent writers from around the globe,
            stories we feature and leading authors, and smart takes on our own
            suite of blogs and publications.
          </p>
        </div>
        <div className="profiles">
          {arr.map((el, i) => (
            <Profiles key={i} name={el} index={i} />
          ))}
        </div>
        <div className="filler"> 00 </div>
      </Wrapper>
    </>
  );
};
