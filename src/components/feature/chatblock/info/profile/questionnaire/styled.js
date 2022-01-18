import styled, { css } from 'styled-components';

export const Background = styled.div`
  ${({ sender }) =>
  sender === true
    ? css`
      display: visible;
      `
    : css`
      display: none;
    `}
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  top: 26vw;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 35vw;
  padding: 1.5vw;
  border: 0.1vw solid;
  background: white;
  border-radius: 1vw;
  font-size: 1.2vw;
`;

export const Question = styled.div`
  white-space: nowrap;
  margin-right: 0.3vw;
`;

export const Item = styled.div`
  display: flex;
  font-weight: bold;
`;

export const Answer = styled.div`
  font-weight: 400;
  text-align: left;
  white-space: pre-wrap;
`;