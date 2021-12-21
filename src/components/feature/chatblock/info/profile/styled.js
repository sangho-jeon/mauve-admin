import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 38vw;
  height: 15vw;
  background-color: white;
  box-shadow: 0px 5px 10px #00000015;
`;

export const Information = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 16vw;
  height: 15vw;
  padding: 1vw;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5vw;
  font-size: 1.2vw;
`;

export const Tag = styled.div`
  margin-right: 0.5vw;
  font-size: 1.2vw;
  font-weight: bold;
`;
