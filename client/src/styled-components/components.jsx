import styled from "styled-components";

export const Nav = styled.div`
height: 85px;
border-bottom:1px solid black;
position:sticky;
display: flex;
justify-content: space-between;
align-items: center;
width:100vw;
background:${props => (props.color) ? props.color : "white"}; ;
`