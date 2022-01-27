import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42vw;
  height: 16vw;
  background-color: white;
  border-radius: 0.3vw;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 41vw;
  height: 2vw;
  border-radius: 0.3vw;
  background-color: white;
  border-bottom: 0.1vw solid #F0F0F0;
`;

export const Text = styled.div`
  width: 5vw;
  font-size: 0.8vw;
  color: #808080;
`;

export const DateText = styled.div`
  width: 6.5vw;
  font-size: 0.8vw;
  color: #808080;
`;

export const TimeText = styled.div`
  width: 3.5vw;
  font-size: 0.8vw;
  color: #808080;
`;

export const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42vw;
  height: 13vw;
  overflow-y: scroll;
  color: #303030;
`;