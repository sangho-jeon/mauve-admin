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
  padding: 0.6vw 1vw;
  border-radius: 1vw;
  font-size: 1.1vw;

  ${({ sender }) =>
    sender !== true
      ? css`
          background-color: rgb(229, 229, 232);
          color: black;
        `
      : css`
          background-color: rgb(52, 120, 246);
        `}
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14vw;
  height: 14vw;
  object-fit: cover;
`;

export const Time = styled.div`
  font-size: 0.7vw;
  color: black;
  margin-bottom: 0.1vw;
`;