import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 41vw;
  height: 17vw;
  background-color: white;
  box-shadow: 0px 5px 10px #00000015;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 41vw;
  height: 2vw;
  background-color: #d5d2ff;
  text-align: center;
`;

export const Text = styled.div`
  width: 6vw;
  text-align: center;
  font-size: 1vw;
`;

export const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 41vw;
  height: 15vw;
  overflow-y: scroll;
`;