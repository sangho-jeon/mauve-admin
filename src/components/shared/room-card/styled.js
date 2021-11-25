import styled, { css } from "styled-components";

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  width: 22vw;
  height: 5vw;
  border: none;
  border-radius: 5px;
  margin-bottom: 1vw;
  padding: 0.5vw;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  pointer-events: none;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11vw;
  font-size: 14px;
`;

export const Weight = styled.div`
  ${({ sender }) =>
    sender === true
      ? css`
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: orange;
        `
      : css`
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background-color: grey;
        `}
`;

export const Diet = styled.div`
  ${({ sender }) =>
    sender === true
      ? css`
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: green;
        `
      : css`
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background-color: grey;
        `}
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  pointer-events: none;
`;

export const Name = styled.div`
  margin-right: 8px;
  font-size: 24px;
  font-weight: bold;
  text-overflow: ellipsis;
`;

export const Text = styled.div`
  width: 17vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  font-weight: bold;
  background-color: red;
  color: white;
`;

export const Waiting = styled.div`
  font-weight: bold;
  color: red;
`;
