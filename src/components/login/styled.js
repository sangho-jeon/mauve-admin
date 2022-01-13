import styled from "styled-components";

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Loginblock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40vw;
  height: 27vw;
  margin-top: 5vw;
  border-radius: 2vw;
  margin-bottom: 5vw;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.39);
`;

export const Banner = styled.div`
  font-size: 4vw;
  color: #e0b0ff;
  margin-top: 1.5vw;
  font-weight: bold;
`;

export const LoginInput = styled.input`
  margin-bottom: 5vw;
  margin-top: 5vw;
  width: 9vw;
  height: 2vw;
  border-color: #d1d1d1;
  border-radius: 0.5vw;
  border-style: solid;
`;

export const LoginButton = styled.button`
  width: 4vw;
  height: 2vw;
  margin-bottom: 4vw;
  background-color: #e0b0ff;
  border-radius: 5px;
  border-style: solid;
  cursor: pointer;
`;
