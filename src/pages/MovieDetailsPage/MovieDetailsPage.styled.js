import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ImageBox = styled.div`
 display: inline-block;
`
export const Wrapper = styled.div`
 display: flex;
 align-items: center;
 gap: 16px;
 padding-bottom: 16px;
 padding-top: 16px;
 border-bottom: 1px solid black;
`
export const Image = styled.img`
 width: 220px;
 height: auto;
`
export const List = styled.ul`
 display: flex;
 align-items: center;
 gap: 8px;
`
export const LinkStyled = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 4px;
 text-decoration: none;
 color: black;
 font-weight: 500;

 &.active {
  color: white;
  background-color: orangered;
 }
  `
export const ListStyled = styled.ul`
 display: flex;
 align-items: center;
 gap: 16px;
 margin-bottom:16px;
`;