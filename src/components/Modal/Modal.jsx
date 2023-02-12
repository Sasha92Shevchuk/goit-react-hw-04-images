import React from 'react';

import { ModalBox, Overlay } from './Modal.styled';

const Modal = ({ imageInfo: { largeImageURL, tags }, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalBox>
        <img src={largeImageURL} alt={tags} />
      </ModalBox>
    </Overlay>
  );
};

export default Modal;
