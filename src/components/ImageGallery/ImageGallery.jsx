import React from 'react';
import PropTypes from 'prop-types';
import css from '../Styled/Styles.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ searchCards }) => {
  return (
    <ul className={css.ImageGallery}>
      {searchCards.map(searchCard => (
        <li key={searchCard.id} className={css.ImageGalleryItem}>
          <ImageGalleryItem imageInfo={searchCard} />
        </li>
      ))}
    </ul>
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
