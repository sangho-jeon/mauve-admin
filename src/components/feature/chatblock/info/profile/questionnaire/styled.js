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
  top: 25vw;
  transform: translate(-50%, -50%);
  width: 45vw;
  height: 32vw;
  padding: 1.5vw;
  border: 2px solid;
  background: white;
  border-radius: 1vw;
  font-size: 1.2vw;
`;

export const Question = styled.div`
  display: flex;
  font-weight: bold;
`;

export const Answer = styled.div`
  font-weight: 400;
`;