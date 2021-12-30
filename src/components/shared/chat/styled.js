import styled, { css } from "styled-components";

export const BubbleContainer = styled.div`
  display: flex;
  color: white;

  ${({ sender }) =>
    sender === true
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
`;

export const Bubble = styled.div`
  max-width: 75%;
  word-break: break-all;
  padding: 0.6vw 1vw;
  border-radius: 1.4vw;
  margin: 0.15vw;
  font-size: 1.1vw;

  ${({ sender }) =>
    sender !== true
      ? css`
          margin-left: 1vw;
          background-color: rgb(229, 229, 232);
          color: black;
        `
      : css`
          margin-right: 1vw;
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