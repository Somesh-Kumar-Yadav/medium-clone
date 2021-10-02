import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.95rem;
  color: rgb(117, 117, 117);
  border-bottom: 1px solid rgb(230, 230, 230);

  p:hover {
    color: black;
  }

  .flex {
    display: flex;
    width: 70%;
    padding: 15px 45px;
    justify-content: space-around;
    align-items: center;

    button {
      background: rgb(0, 152, 201);
      padding: 10px 20px;
      border-radius: 18px;
      border: none;
      color: white;
    }
  }
`;

export const FollowNav = () => {
  return (
    <>
      <Wrapper>
        <div className="flex">
          <button>Follow</button>
          <p>{"10k"} Followers</p>
          <p> Editor's picks</p>
          <p>Recieve our newsletter</p>
          <p>Publish a story</p>
          <p> About </p>
        </div>
      </Wrapper>
    </>
  );
};
