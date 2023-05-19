import React from 'react';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
export const ImageGallery =({images, onImageClick}) => {
      return (
      <div className={css.ImageGallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            hit={image}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
