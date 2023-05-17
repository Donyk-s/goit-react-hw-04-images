import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export const ImageGalleryItem  = (hit, onImageClick) => {
  return (
          <li key={hit.id} className={css.ImageGalleryItem}>
            <img
              src={hit.webformatURL}
              alt={hit.tags}
              data-source={hit.largeImageURL}
              className={css.ImageGalleryItemImage}
              onClick={() => onImageClick(hit.largeImageURL, hit.tags)}
            />
          </li>
        );
}
ImageGalleryItem.propTypes = {
  hit: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
// class ImageGalleryItem extends Component {
//   render() {
//     const { hit, onImageClick } = this.props;

//     return (
//       <li key={hit.id} className={css.ImageGalleryItem}>
//         <img
//           src={hit.webformatURL}
//           alt={hit.tags}
//           data-source={hit.largeImageURL}
//           className={css.ImageGalleryItemImage}
//           onClick={() => onImageClick(hit.largeImageURL, hit.tags)}
//         />
//       </li>
//     );
//   }
// }
// ImageGalleryItem.propTypes = {
//   hit: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     webformatURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   }).isRequired,
//   onImageClick: PropTypes.func.isRequired,
// };

// export default ImageGalleryItem;
