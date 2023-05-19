import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';
const LoadMoreButton = ({ onClick }) => (
  <button type="button" className={css.Button} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreButton;
LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired
}