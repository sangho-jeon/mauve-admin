import styled from "styled-components";

export const Profile = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 42vw;
  height: 17vw;
  background-color: white;
  border-radius: 0.3vw;
  padding: 1vw;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 18vw;
  height: 15vw;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 1.6vw;
  margin-bottom: 0.5vw;
  font-size: 1vw;
  color: #303030;
  border-bottom: 0.1vw solid #F0F0F0;
`;

export const Tag = styled.div`
  margin-right: 1.2vw;
  width: 4.5vw;
  color: #808080;
`;

export const Button = styled.div`
  position: fixed;
  top: 1vw;
  left: 51vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vw;
  height: 2vw;
  border-radius: 0.2vw;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  font-size: 1vw;
  color: #878787;
  background-color: #F4F4F4;
`;