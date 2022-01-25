import styled, { css } from "styled-components";

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  width: 22vw;
  height: 4.4vw;
  border: none;
  border-radius: 0.5vw;
  margin-bottom: 0.8vw;
  padding: 0.5vw;
  background-color: white;
  font-size: 1vw;
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
  font-size: 1vw;
`;

export const Weight = styled.div`
  ${({ sender }) =>
    sender === true
      ? css`
          width: 0.5vw;
          height: 0.5vw;
          border-radius: 0.25vw;
          background-color: orange;
        `
      : css`
      width: 0.3vw;
      height: 0.3vw;
          border-radius: 0.15vw;
          background-color: grey;
        `}
`;

export const Diet = styled.div`
  ${({ sender }) =>
    sender === true
      ? css`
          width: 0.5vw;
          height: 0.5vw;
          border-radius: 0.25vw;
          background-color: green;
        `
      : css`
          width: 0.3vw;
          height: 0.3vw;
          border-radius: 0.15vw;
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
  margin-right: 0.8vw;
  font-size: 1.3vw;
  font-weight: bold;
  text-overflow: ellipsis;
`;

export const Text = styled.div`
  width: 16.5vw;
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
  font-weight: bold;
  font-size: 1.1vw;
  color: red;
`;

export const Waiting = styled.div`
  font-weight: bold;
  color: red;
`;
