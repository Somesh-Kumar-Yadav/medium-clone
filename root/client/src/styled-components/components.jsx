import styled from "styled-components";

export const Nav = styled.div`
height: 85px;
border-bottom:1px solid black;
position:sticky;
top:0px;
z-index:100;
display: flex;
justify-content: space-between;
align-items: center;
width:100vw;
background:${props => (props.color) ? props.color : "white"}; 
`
export const Head = styled.div`
height: 70vh;
border-bottom:1px solid black;
display: flex;
justify-content: center;
align-items: center;
width:100vw;
overflow: hidden;
position: relative;
background:${props => (props.color) ? props.color : "white"};
`
export const HomeNav = styled.div`
height: 75px;
box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
display: flex;
justify-content: space-between;
align-items: center;
width:100vw;
background:${props => (props.color) ? props.color : "white"}; 
`
export const Tabs = styled.span`
text-transform: uppercase;
margin: 0 15px;
margin-left: 0px;
padding: 10px 8px;
font-weight: 600;
color:${props => (props.tab === props.val) ? "#292929" : "rgba(117, 117, 117, 1)"}; 
font-size: 13px;
cursor: pointer;
line-height: 18px;
border-bottom:${props => (props.tab === props.val) ? "1px solid #292929" : "none"};  
`
export const Wrapper1 = styled.div`
  position: fixed;
  top: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 16%;
  height: 200px;
  left: 20px;
  color: rgb(117, 117, 117);

  .imgDiv {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

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
  .pointer {
    cursor: pointer;
  }
  .subscribe {
    padding: 10px 10px;
    border-radius: 50%;
  }
  .icons {
    display: flex;
    font-size: 1rem;
    justify-content: space-around;
    width: 100%;
    border-top: 1px solid rgb(230, 230, 230);
    div {
      margin: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        padding: 0px 10px;
        font-size: 1.2rem;
      }
    }
  }
`;
export const Wrapper2 = styled.div`
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
export const Wrapper3 = styled.div`
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
      padding: 10px 20px;
      border-radius: 18px;
      border: none;
      color: white;
      background: ${props => (props.val) ? "rgb(0, 152, 201)" : "green"};
    }
  }
`;
export const Wrapper4 = styled.div`
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
export const Wrapper5 = styled.div`
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
export const LearnMoreWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid black;

  .header {
    padding: 30px 30px;
    font-family: Gt-Super-Text-Book;
    font-size: 5.6rem;
    border-right: 1px solid black;
  }

  .divWrap {
    display: flex;
    flex-direction: column;
  }

  .secDiv {
    display: flex;
    flex-direction: column;
    padding: 30px 30px;
    border-bottom: 1px solid black;

    h4 {
      font-family: Gt-Super-Text-Book;
      font-size: 2.4rem;
      width: 60%;
    }
    p {
      font-size: 1.2rem;
      padding: 15px 0px;
      width: 60%;
    }
    button {
      width: 30%;
      font-size: 1.4rem;
      border: 1px solid rgb(52, 162, 69);
      color: rgb(52, 162, 69);
      border-radius: 25px;
      padding: 5px 6px;
      background: white;
      outline: none;
      margin-top: 100px;
    }
    .positions {
      width: 40%;
    }
  }

  .secDiv2 {
    display: flex;
    flex-direction: column;
    padding: 30px 30px;

    h4 {
      font-family: Gt-Super-Text-Book;
      font-size: 2.4rem;
      width: 60%;
    }
    p {
      font-size: 1.2rem;
      padding: 15px 0px;
      width: 60%;
    }
    button {
      width: 30%;
      font-size: 1.4rem;
      border: 1px solid rgb(52, 162, 69);
      color: rgb(52, 162, 69);
      border-radius: 25px;
      padding: 5px 6px;
      background: white;
      outline: none;
      margin-top: 100px;
    }
    .positions {
      width: 40%;
    }
  }
`;
export const SvgCubeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;

  .cube {
    border-right: 1px solid black;
    display: flex;
    justify-content: center;
  }
  .register {
    display: flex;
    flex-direction: column;
    font-family: Gt-Super-Text-Book;
    font-size: 5.9rem;
    line-height: 5.9rem;
    padding: 20px;
    justify-content: space-around;
  }
  button {
    width: 200px;
    font-size: 1.3rem;
    padding: 7px 23px;

    border-radius: 30px;
    border: none;
    color: white;
    background: rgb(52, 162, 69);
    margin-top: 90px;
  }
`;
export const Wrapper6 = styled.div`
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
  margin-bottom: ${(props) => (props.index >= 9 ? `120px` : "0px")};
`;
export const Wrapper7 = styled.div`
  background: black;

  .headerDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 6rem;
    color: white;
    font-family: "GT-Super-Text-Book";
    line-height: 6rem;

    .headerDivLeft {
      padding: 35px 0px;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
      p {
        width: 90%;

        margin: 30px auto;
      }
    }

    .headerDivRight {
      font-size: 1.4rem;
      line-height: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 40px;
      border-bottom: 1px solid white;

      img {
        width: 150px;
        border-radius: 50%;
      }
      p {
        margin-top: 20px;
        margin-left: 20px;
        width: 90%;
        span {
          display: block;
          padding: 25px 0px;
        }
      }
    }
  }
`;
export const BannerWrapper = styled.div`
  background: ${(prop) => prop.background};
  text-align: center;
  width: 100%;
  color: ${(prop) => prop.font};
  .netWorkHeader {
    width: ${(prop) => (prop.width ? prop.width : "85%")};
    margin: auto;
    font-size: 6rem;
    line-height: 6rem;
    font-family: "GT-Super-Text-Book";
    font-weight: 600;
    padding-top: 70px;
  }
  .netWorkBody {
    width: 45%;
    margin: 15px auto;
    font-size: 1.05rem;
    padding: 25px 0px;
    font-weight: 600;
  }

  button {
    border: ${(prop) => (prop.fontColor ? prop.fontColor : prop.color)} solid
      1px;
    font-size: 1.3rem;
    padding: 7px 23px;
    color: ${(prop) => (prop.fontColor ? prop.fontColor : prop.color)};
    border-radius: 30px;
    background: ${(prop) => prop.background};
    margin-bottom: 55px;
    margin-top: 25px;
  }
`;
export const SubBannerBlockWrapper = styled.div`
  display: grid;
  height: 380px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  grid-template-columns: 1fr 1fr;
  background: rgb(52, 162, 69);
  font-size: 1.1rem;
  font-weight: 500;

  .firstDiv {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    text-align: left;
    flex-direction: column;
    border-right: 1px solid black;
    padding: 30px 30px;
    .header {
      font-family: Gt-Super-Text-Book;
      font-size: 2.5rem;
    }
  }
  .secondDiv {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    text-align: left;
    flex-direction: column;
    padding: 30px 30px;
    .header {
      font-family: Gt-Super-Text-Book;
      font-size: 2.5rem;
    }
  }

  img {
    height: 120px;
  }
`;