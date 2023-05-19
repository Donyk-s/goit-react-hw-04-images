import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css';
import { getImages } from './service/api';
import { ImgModal } from './Modal/ImgModal';
import { ToastContainer, toast } from 'react-toastify';
import { Loader } from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');
  const [tags, setTags] = useState('');

  const handleFormSubmit = query => {
    const trimmedQuery = query.trim();

    if (trimmedQuery !== '') {
      setQuery(trimmedQuery);
      setPage(1);
      setImages([])
    }
  };

  const fetchImages = async (query, page) => {
    try {
      setIsLoading(true);
      const data = await getImages(query, page);
      if (data.hits.length === 0) {
        return toast.error("We didn't find anything for this search :(  Try another option");
      }

      setTotal(data.totalHits);
      setImages(prev => [...prev, ...data.hits]);
     
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query !== '') {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (largeImage, tags) => {
    setLargeImage(largeImage);
    setTags(tags);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      <ToastContainer />
      {isLoading && <Loader />}
      {total === 0 && (
        <ToastContainer type="error" autoClose={false}>
          No results found. Please try a different search term.
        </ToastContainer>
      )}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length === 0 && !isLoading && (
        <ToastContainer type="error" autoClose={false}>
          No results found. Please try a different search term.
        </ToastContainer>
      )}

      {total > page * 12 && <Button onClick={handleLoadMore} text="Load more" />}
      {showModal && (
        <ImgModal largeImageURL={largeImage} tags={tags} closeModal={closeModal} />
      )}

     {error && (
  <ToastContainer type="error" autoClose={false}>
    {error}
  </ToastContainer>
)}

    </div>
  );
};
