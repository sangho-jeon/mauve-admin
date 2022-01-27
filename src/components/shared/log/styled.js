import styled from "styled-components";

export const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  width: 41vw;
  padding: 0.5vw 0;
  font-size: 0.9vw;
  background-color: white;
  border-bottom: 0.1vw solid #F0F0F0;
`;

export const Date = styled.div`
  display: flex;
  width: 6.5vw;
  height: 5vw;
`;

export const Time = styled.div`
  width: 3.5vw;
  height: 5vw;
`;

export const WeightTime = styled.div`
  display: flex;
  width: 3.5vw;
  height: 1.8vw;
`;

export const Weight = styled.div`
  width: 5vw;
  height: 5vw;
`;

export const WeightData = styled.div`
  display: flex;
  width: 5vw;
  height: 1.8vw;
`;

export const Diet = styled.div`
  display: flex;
  flex-direction: column;
  width: 5vw;
  height: 6vw;
`;

export const DietTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 1vw;
  color: #303030;
`

export const DietImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 5vw;
  margin-bottom: 0.1vw;
  object-fit: cover;
`