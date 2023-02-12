import Modal from 'components/Modal';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { isModalOpen } = this.state;
    const {
      imageInfo: { webformatURL, tags },
    } = this.props;
    return (
      <>
        <img
          onClick={this.openModal}
          src={webformatURL}
          alt={tags}
          loading="lazy"
        />
        {isModalOpen && (
          <Modal imageInfo={this.props.imageInfo} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
