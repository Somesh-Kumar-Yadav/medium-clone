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