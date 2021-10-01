import styled from "styled-components";
{
  /* <FontAwesomeIcon icon="fa-solid fa-hands-clapping" />; */
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 20%;
  height: 200px;
  border: 1px solid red;
  left: 20px;

  .follow {
    display: flex;
  }
  button {
    background: rgb(0, 152, 201);
    padding: 10px 20px;
    border-radius: 18px;
    border: none;
    color: white;
  }
  .subscribe {
    padding: 10px 10px;
    border-radius: 50%;
  }
`;

const name = "author name";
const about =
  "Co-Founder @ confettihabits.com & Senior Product Designer @ Method — Dannysapio.com";

export const AboutAuthorWindow = (
  {
    //   name,
    //   about,
    //   followers,
    //   likes,
    //   comments,
  }
) => {
  return (
    <>
      <Wrapper>
        <p>{name}</p>
        <div className="follow">
          <button className="">Follow</button>
        </div>
      </Wrapper>
    </>
  );
};
