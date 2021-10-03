import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid black;
  font-size: 1.5rem;

  img {
    border-radius: 50%;
  }

  p {
    padding: 25px 15px;
  }
  border-bottom: ${(props) => (props.index >= 9 ? `1px solid black` : "0px")};
  margin-botton: ${(props) => (props.index >= 9 ? `120px` : "0px")};
`;

export const Profiles = ({
  img = "https://via.placeholder.com/50",
  name = "meehh",
  index,
}) => {
  return (
    <>
      <Wrapper index={index}>
        <img src={img} alt="" />
        <p>{name}</p>
      </Wrapper>
    </>
  );
};
