import styled, { css } from "styled-components";

export const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0.5vw 0;
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
  font-size: 1.05vw;
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
  ${({ tag }) =>
  tag === "chat" || tag === "weight"
    ? css`
     padding: 0.5vw 0.8vw;
    `
    : css`
      padding: 0;
    `}
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13vw;
  height: 13vw;
  border-radius: 0.5vw;
  object-fit: cover;
`;

export const Time = styled.div`
  font-size: 0.7vw;
  color: black;
  margin-bottom: 0.1vw;
`;