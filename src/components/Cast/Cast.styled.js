import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, 180px);
  gap: 12px;
`; 
export const Wrapper = styled.div`
 padding: 16px 0;
`; 
export const Card = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 72px;
 padding: 8px;
 border-bottom-left-radius: 8px;
 border-bottom-right-radius: 8px;
 box-shadow: 1px 1px 2px 1px rgb(47 47 52 / 20%);
`; 
export const Image = styled.img`
 border-top-left-radius: 8px;
 border-top-right-radius: 8px;
 width: 180px;
 height: 270px;
 box-shadow: 1px 1px 2px 1px rgb(47 47 52 / 20%)
`; 