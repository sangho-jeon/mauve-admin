import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23vw;
  height: 55vw;
  background-color: #F2F2F2;
`;

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 23vw;
  height: 3.5vw;
  padding: 1.3vw 1vw 1vw;
  font-size: 1vw;
  color: #303030;
  border-bottom: 0.1vw solid #E5E5E5;
`;

export const CardContainer = styled.div`
  height: 52vw;
  overflow-y: scroll;
`;

export const Refresh = styled.img`
  width: 1vw;
  height: 1vw;
  cursor: pointer;
`;
