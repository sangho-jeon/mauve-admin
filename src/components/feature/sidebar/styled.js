import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;
  height: 55vw;
  background-color: #7e67ff;
`;

export const Header = styled.header`
  margin: 2vw 0 1vw;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const CardContainer = styled.div`
  height: 45vw;
  overflow-y: scroll;
`;
