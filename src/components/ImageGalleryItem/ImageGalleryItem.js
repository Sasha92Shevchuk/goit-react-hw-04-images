import Modal from 'components/Modal';
import React, { useState } from 'react';

function ImageGalleryItem({ imageInfo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = e => {
    if (e.currentTarget === e.target) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <img
        onClick={openModal}
        src={imageInfo.webformatURL}
        alt={imageInfo.tags}
        loading="lazy"
      />
      {isModalOpen && <Modal imageInfo={imageInfo} onClose={closeModal} />}
    </>
  );
}

export default ImageGalleryItem;
