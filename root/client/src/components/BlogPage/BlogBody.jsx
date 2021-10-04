import styled from "styled-components";
import { convertDates } from "../../utils/convertDates";
import { convertMin } from "../../utils/convertMin";
import parse from "html-react-parser";

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  margin: auto;

  .wrapper {
    margin: 60px auto;

    h2 {
      font-size: 3rem;
    }
    .desc {
      color: rgb(117, 117, 117);
      font-size: 1.35rem;
      margin: 15px 0px 25px 0px;
    }
  }

  .authorDesc {
    display: grid;
    grid-template-columns:2fr 2fr;
    align-items:center;
    margin-bottom:30px;

    p{
        padding-right:15px;
        color: rgb(117, 117, 117);
    }


    .div1 {
      display:flex;
      justify-content:flex-start;
      align-items:center;
      .imgDiv{
        width:25px;
        height:25px;
        border-radius:50%;
        margin-right:15px;
        overflow:hidden;

        img{
          width:100%;
        }
      }
      }

    .div2{
        display:flex;
        justify-content:flex-end;
    }  
      i {
        padding: 5px 5px;
        background: black;
        color: white;
        border-radius: 50%;
        font-size: 0.9rem;
        margin-right:8px;
      }
       #fb{
         padding:5px 8px;
       }
    }
  }
  img {
    width: 100%;
  }

  .body{
      margin:30px auto;
      text-align:center;
      font-size:1.2rem;
      line-height:1.8rem;
  }
`;

export const BlogBody = ({ data }) => {
  const { description, title, author, featureImg, text } = {
    ...data,
  };
  const date = convertDates(data.createdAt);
  const time = convertMin(data.text);

  //console.log("text", text[0]);

  return (
    <Wrapper>
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
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fas fa-link"></i>
              <i id="fb" class="fab fa-facebook-f"></i>
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
    </Wrapper>
  );
};
