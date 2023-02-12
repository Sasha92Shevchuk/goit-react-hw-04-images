import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import css from '../Styled/Styles.module.css';

const Button = ({ loadMore, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <button className={css.Button} type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;
