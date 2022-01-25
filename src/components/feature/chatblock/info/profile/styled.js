import styled from "styled-components";

export const Profile = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 41vw;
  height: 17vw;
  padding: 1vw;
  background-color: white;
  box-shadow: 0px 5px 10px #00000015;
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
  margin-bottom: 0.5vw;
  font-size: 1.2vw;
`;

export const Tag = styled.div`
  margin-right: 0.5vw;
  font-size: 1.2vw;
  font-weight: bold;
`;

export const Button = styled.div`
  width: 3.5vw;
  height: 1.5vw;
  margin-top: 1vw;
  padding: 0.5vw 0.7vw;
  border-radius: 1.2vw;
  border: 0.1vw solid #cccccc;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  font-size: 1vw;
`;