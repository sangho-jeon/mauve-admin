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
  padding: 8px 15px 8px 13px;
  border-radius: 20px;
  margin: 2px;

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
