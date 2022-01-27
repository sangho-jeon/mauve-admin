import styled, { css } from "styled-components";

export const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0.15vw 0;
  ${({ sender }) =>
    sender === true
      ? css`
          align-items: flex-end;
        `
      : css`
          align-items: flex-start;
        `}
`;

export const Bubble = styled.div`
  max-width: 75%;
  word-break: break-all;
  padding: 0.5vw 0.8vw;
  font-size: 1vw;
  white-space: pre-wrap;
  color: black;
  ${({ sender }) =>
    sender !== true
      ? css`
          background-color: #F8F8F8;
          border-radius: 0.1vw 0.6vw 0.6vw 0.6vw;
        `
      : css`
          background-color: #FFFFFF;
          border: 0.1vw solid #F0F0F0;
          border-radius: 0.6vw 0.1vw 0.6vw 0.6vw;
        `}
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12vw;
  height: 12vw;
  border-radius: 0.6vw;
  object-fit: cover;
`;

export const Time = styled.div`
  font-size: 0.7vw;
  color: black;
  margin-bottom: 0.1vw;
`;