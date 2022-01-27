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
  top: 27vw;
  transform: translate(-50%, -50%);
  width: 24vw;
  height: 50vw;
  padding: 1.2vw;
  background: white;
  border-radius: 1vw;
  font-size: 1vw;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.1vw solid #E0E0E0;
`;

export const Question = styled.div`
  white-space: nowrap;
  color: #808080;
  margin-bottom: 0.4vw;
`;

export const Answer = styled.div`
  font-weight: 400;
  color: #303030;
  white-space: pre-wrap;
  margin-bottom: 0.2vw;
`;