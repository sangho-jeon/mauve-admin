import styled, { css } from "styled-components";

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  width: 23vw;
  height: 6vw;
  border: none;
  padding: 1vw 1vw 0.5vw;
  border-bottom: 0.1vw solid #E5E5E5;
  background-color: white;
  font-size: 1vw;
  cursor: pointer;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: none;
`;

export const First = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  pointer-events: none;
`;

export const Name = styled.div`
  margin-right: 0.8vw;
  font-weight: 600;
  text-overflow: ellipsis;
  color: #303030;
`;

export const Text = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  color: #808080;
  margin-top: 0.2vw;
`;

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  font-weight: 700;
  ${({ count }) =>
  count === 0
    ? css`
      color: #D0D0D0;
      `
    : css`
      color: #F5532F;
    `}
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1vw;
  pointer-events: none;
`;

export const Mark = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7vw;
`;

export const WeightMark = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1.8vw;
`;

export const DietMark = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3vw;
`;

export const Weight = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  ${({ sender }) =>
    sender === true
      ? css`
        background-color: #7B61FF;
        `
      : css`
        background-color: #D0D0D0;
      `}
`;

export const Diet = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 0.25vw;
  ${({ sender }) =>
    sender === true
      ? css`
        background-color: #7B61FF;
        `
      : css`
        background-color: #D0D0D0;
      `}
`;

export const Waiting = styled.div`
  font-weight: 600;
  color: black;
`;
