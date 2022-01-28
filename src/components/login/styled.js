import styled from "styled-components";

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 55vw;
  // background-color: #F1F1F1;
`;

export const Loginblock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 27vw;
  // box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.39);
`;

export const Logo = styled.img`
  width: 13vw;
  height: 5vw;
  margin-bottom: 0.4vw;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1vw;
  color: #808080;
  margin-top: 1.8vw;
  font-weight: 700;
`;

export const LoginInput = styled.input`
  box-sizing: border-box;
  margin-bottom: 1.5vw;
  margin-top: 2.5vw;
  width: 20vw;
  height: 4vw;
  padding: 1.5vw;
  border-radius: 0.6vw;
  border: 0.1vw solid #E0E0E0;
  outline: none;
`;

export const LoginButton = styled.button`
  box-sizing: border-box;
  width: 6vw;
  height: 3vw;
  background-color: #3988FF;
  color: #FFFFFF;
  padding: 0.3vw;
  border-radius: 0.2vw;
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
