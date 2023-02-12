import React from 'react';
import css from '../Styled/Styles.module.css';

const Modal = ({ imageInfo: { largeImageURL, tags }, onClose }) => {
  return (
    <div onClick={onClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
