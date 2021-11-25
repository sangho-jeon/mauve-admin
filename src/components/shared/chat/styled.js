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
          margin-left: 2vw;
          background-color: #c490e4;
        `
      : css`
          margin-right: 2vw;
          background-color: #a6b1e1;
        `}
`;
