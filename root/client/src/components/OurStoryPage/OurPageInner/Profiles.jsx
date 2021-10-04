import { Wrapper6 } from "../../../styled-components/components";

export const Profiles = ({
  img = "https://via.placeholder.com/50",
  name = "meehh",
  index,
}) => {
  return (
    <>
      <Wrapper6 index={index}>
        <img src={img} alt="" />
        <p>{name}</p>
      </Wrapper6>
    </>
  );
};
