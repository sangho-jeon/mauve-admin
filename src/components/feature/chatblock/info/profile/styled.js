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
  width: 16vw;
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
  padding: 0.4vw;
  border-radius: 0.5vw;
  border: 0.2vw solid gray;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  font-size: 1vw;
`;