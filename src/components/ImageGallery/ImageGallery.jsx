import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Item, List } from './ImageGallery.styled';

const ImageGallery = ({ searchCards }) => {
  return (
    <List>
      {searchCards.map(searchCard => (
        <Item key={searchCard.id}>
          <ImageGalleryItem imageInfo={searchCard} />
        </Item>
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  searchCards: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
