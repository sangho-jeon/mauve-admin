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
    position: fixed;
    left: 50%;
    top: 25vw;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 35vw;
    height: 20vw;
    padding: 1vw;
    border: 2px solid;
    background: white;
    border-radius: 10px;
    font-size: 1vw;
    text-align: center;
`;

export const ModalText = styled.div`
`;

// export const ModalWrapper = styled.div`
//   box-sizing: border-box;
//   display: ${(props) => (props.visible ? 'block' : 'none')};
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 1000;
//   overflow: auto;
//   outline: 0;
// `;

// export const ModalOverlay = styled.div`
//   box-sizing: border-box;
//   display: ${(props) => (props.visible ? 'block' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.6);
//   z-index: 999;
// `;

// export const ModalInner = styled.div`
//   box-sizing: border-box;
//   position: relative;
//   box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
//   background-color: #fff;
//   border-radius: 10px;
//   width: 360px;
//   max-width: 480px;
//   top: 50%;
//   transform: translateY(-50%);
//   margin: 0 auto;
//   padding: 40px 20px;
// `;