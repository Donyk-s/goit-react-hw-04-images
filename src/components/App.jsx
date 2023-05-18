import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
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
  const [showLoadMore, setShowLoadMore] = useState(false);

  const handleFormSubmit = query => {
    const trimmedQuery = query.trim();
  
    if (trimmedQuery !== '') {
      setQuery(trimmedQuery);
      setPage(1);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      if (query !== '') {
        try {
          const fetchedImages = await getImages(query, page);
          if (fetchedImages.hits.length === 0) {
            toast.warn('Sorry, no images found for your search. Please try again!');
          }

          setTotal(fetchedImages.total);
          setImages(prevImages =>
            page === 1 ? fetchedImages.hits : [...prevImages, ...fetchedImages.hits]
          );
          setShowLoadMore(fetchedImages.total > page * 12);
          setIsLoading(false);
          setError(null); 
        } catch (error) {
          console.log(error);
          setError(error); 
          setIsLoading(false);
        }
      }
    };

    fetchData();
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

      {showLoadMore && <Button onClick={handleLoadMore} text="Load more" />}
      {showModal && (
        <ImgModal
          largeImageURL={largeImage}
          tags={tags}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

