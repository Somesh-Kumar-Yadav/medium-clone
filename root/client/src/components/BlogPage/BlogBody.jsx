import { convertDates } from "../../utils/convertDates";
import { convertMin } from "../../utils/convertMin";
import parse from "html-react-parser";
import { Wrapper2 } from "../../styled-components/components";

export const BlogBody = ({ data }) => {
  const { description, title, author, featureImg, text } = {
    ...data,
  };
  const date = convertDates(data.createdAt);
  const time = convertMin(data.text);
  return (
    <Wrapper2>
      {data && (
        <div className="wrapper">
          <h2> {title}</h2>
          <p className="desc"> {description}</p>
          <div className="authorDesc">
            <div className="div1">
              <div className="imgDiv">
                <img src={data.author.imageUrl} alt="" />
              </div>
              <p>{author.name}</p>
              <p>{`${date}`}</p>
              <p> {time} min read</p>
            </div>
            <div className="div2">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fas fa-link"></i>
              <i id="fb" className="fab fa-facebook-f"></i>
            </div>
          </div>
          <img src={featureImg} alt="" />
          <div className="body">
            {!text[0] === ">" ? (
              text.split("\n").map((p) => (
                <>
                  <p>{p}</p>
                  <br />
                </>
              ))
            ) : (
              <div>{parse(`${text}`)}</div>
            )}
          </div>
        </div>
      )}
    </Wrapper2>
  );
};
