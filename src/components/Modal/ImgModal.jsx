import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function ImgModal({ closeModal, largeImageURL, tags }) {
  useEffect(() => {
    function handleCloseECC(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleCloseECC);

    return () => window.removeEventListener('keydown', handleCloseECC);
  }, [closeModal]);

  function handleCloseBackdrop(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return createPortal(
    <div className={css.Overlay} onClick={handleCloseBackdrop}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} width="1000" />
      </div>
    </div>,
    modalRoot
  );
}

ImgModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
