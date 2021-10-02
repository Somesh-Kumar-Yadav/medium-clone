import styled from "styled-components";

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
    margin-bottom:30px;

    p{
        padding-right:15px;
        color: rgb(117, 117, 117);
    }


    .div1 {
      display:flex;
      justify-content:flex-start;
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
      align-text:center;
      font-size:1.2rem;
      line-height:1.8rem;
  }
`;

export const BlogBody = () =>
  //   { title },
  //   { description },
  //   { author },
  //   { data },
  //   { image }
  //{body}
  {
    return (
      <Wrapper>
        <div className="wrapper">
          <h2> {title}</h2>
          <p className="desc"> {description}</p>
          <div className="authorDesc">
            <div className="div1">
              <p>{author}</p>
              <p>{date}</p>
              <p> 4 min read</p>
            </div>
            <div className="div2">
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fas fa-link"></i>
              <i id="fb" class="fab fa-facebook-f"></i>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="body">
            {/* <p>{body}</p> */}
            {body.split(".").map((p) => (
              <>
                <p>{p}</p>
                <br />
              </>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  };
// temp
const title = "10 Figma Best Practices to 10X Your Workflow";
const description = "Industry best practices to design like a senior designer.";
const author = "danial sans";
const date = "29 Jun";
const image = "https://miro.medium.com/max/1400/1*FH7hdoBfk7pBX-s69yszXg.png";
const body =
  "By using base components for our variant sets we can make one adjustment to our base and it will push the changes to all of our variant instances.To do this, create a base component with all of the elements needed in our different variations for default, icon left, icon right, hover, active, error, and so on.Then it’s as simple as hiding elements we don’t need in different variants.Base components themselves don’t need to be part of our component set and can be placed nearby on the same page or frame. Use a . or _ to prevent them from being published as part of our component library.";
