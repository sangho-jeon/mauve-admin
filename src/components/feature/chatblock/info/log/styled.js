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
  background-color: white;
  border-bottom: 0.1vw solid #cccccc;
  text-align: center;
`;

export const Text = styled.div`
  width: 6vw;
  text-align: center;
  font-size: 1vw;
  font-weight: 500;
`;

export const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 41vw;
  height: 15vw;
  overflow-y: scroll;
`;