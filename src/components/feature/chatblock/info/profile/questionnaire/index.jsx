import React from 'react';
import { Background, ModalContainer, ModalText } from './styled';

const Modal = (props) => {
  return (
    <Background sender={props.showModal} onClick={props.click}>
      <ModalContainer>
         <ModalText>문진표~~~~~</ModalText>
      </ModalContainer>
    </Background>
  );
};

// Modal.propTypes = {
//   visible: PropTypes.bool,
// }


export default Modal;