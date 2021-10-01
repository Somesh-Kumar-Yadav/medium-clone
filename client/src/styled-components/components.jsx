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