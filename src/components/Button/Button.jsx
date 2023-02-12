import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { ButtonLoad } from './Button.styled';

const Button = ({ loadMore, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ButtonLoad type="button" onClick={loadMore}>
          Load more
        </ButtonLoad>
      )}
    </>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;
