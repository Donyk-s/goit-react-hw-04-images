// import React, { useEffect, useState } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import css from './App.module.css';
// import { getImages } from './service/api';
// import { ImgModal } from './Modal/ImgModal';
// import { ToastContainer, toast } from 'react-toastify';
// import { Loader } from './Loader/Loader';
// import 'react-toastify/dist/ReactToastify.css';

// export const App = () = {
//   const [images, setImeges] = useState([]);
//   const [query, setQuery] = useState('');
//   const [page, setPage] = useState('1');
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [largeImage, setLargeImage] = useState('');
//   const [total, setTotal] = useState(0);
//   const [error, setError] = useState(null);
//   const [tags, setTags] = useState('');
//   const [showLoadMore, setShowLoadMore] = useState(false);

//   handleFormSubmit = (query) => {
//     useState('');
//     useState('1');
//     useState([]);
//     useState(true);
//     useState(null)
//   };
//     useEffect=(()=>[async componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.fetch(query, page);
//     }
//   }]) async componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.fetch(query, page);
//     }
//   }

//   const fetch = async (query, page) => {
//     try {
//       const images = await getImages(query, page);
//       if (images.hits.length === 0) {
//         toast.warn('Sorry, no images found for your search. Please try again!');
//       }
//       const newTotal = images.total;
//       const newImages = images.hits;

//       this.setState(prevState => ({
//         images: page === 1 ? newImages : [...prevState.images, ...newImages],
//         total: newTotal,
//         showLoadMore: newTotal > page * 12,
//         isLoading: false,
//       }));
//     } catch (error) {
//       console.log(error);
//       this.setState({ error, isLoading: false });
//     }
//   };
//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };
//   const handleImageClick = (largeImage, tags) => {
//     setLargeImage(largeImage);
//     setTags(tags);
//     setShowModal(true);
//   }
//     const closeModal = () => {
//     setShowModal(false);
//   };
//    return (
//     <div className={css.App}>
//       <Searchbar onSubmit={handleFormSubmit} />
//       <ToastContainer />
//       {isLoading && <Loader />}
//       {total === 0 && (
//         <ToastContainer type="error" autoClose={false}>
//           No results found. Please try a different search term.
//         </ToastContainer>
//       )}
//       <ImageGallery images={images} onImageClick={handleImageClick} />
//       {images.length === 0 && !isLoading && (
//         <ToastContainer type="error" autoClose={false}>
//           No results found. Please try a different search term.
//         </ToastContainer>
//       )}

//       {showLoadMore && <Button onClick={handleLoadMore} text="Load more" />}
//       {showModal && (
//         <ImgModal
//           largeImageURL={largeImage}
//           tags={tags}
//           closeModal={closeModal}
//         />
//       )}
//     </div>
//   );
// };

//      return (
//       <div className={css.App}>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ToastContainer />
//         {isLoading && <Loader />}
//         {total === 0 && (
//           <ToastContainer type="error" autoClose={false}>
//             No results found. Please try a different search term.
//           </ToastContainer>
//         )}
//         <ImageGallery images={images} onImageClick={handleImageClick} />
//         {images.length === 0 && !isLoading && (
//           <ToastContainer type="error" autoClose={false}>
//             No results found. Please try a different search term.
//           </ToastContainer>
//         )}

//         {showLoadMore && (
//           <Button onClick={handleLoadMore} text="Load more" />
//         )}
//         {this.state.showModal && (
//           <ImgModal
//             largeImageURL={largeImage}
//             tags={tags}
//             closeModal={closeModal}
//           />
//         )}
//       </div>
//     );
// }

// export class App extends Component {
//   state = {
//     images: [],
//     query: '',
//     page: 1,
//     isLoading: false,
//     showModal: false,
//     largeImage: '',
//     total: 0,
//     error: null,
//     tags: '',
//     showLoadMore: false,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.fetch(query, page);
//     }
//   }
//   fetch = async (query, page) => {
//     try {
//       const images = await getImages(query, page);
//       if (images.hits.length === 0) {
//         toast.warn('Sorry, no images found for your search. Please try again!');
//       }
//       const newTotal = images.total;
//       const newImages = images.hits;

//       this.setState(prevState => ({
//         images: page === 1 ? newImages : [...prevState.images, ...newImages],
//         total: newTotal,
//         showLoadMore: newTotal > page * 12,
//         isLoading: false,
//       }));
//     } catch (error) {
//       console.log(error);
//       this.setState({ error, isLoading: false });
//     }
//   };

//   handleFormSubmit = query => {
//     this.setState({ query, page: 1, images: [], isLoading: true, error: null });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       isLoading: true,
//     }));
//   };

//   handleImageClick = (largeImage, tags) => {
//     this.setState({ showModal: true, largeImage, tags });
//   };

//   closeModal = () => {
//     this.setState({ showModal: false, largeImage: '', tags: '' });
//   };

//   render() {
//     const { images, isLoading, showLoadMore, total } = this.state;

//     return (
//       <div className={css.App}>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ToastContainer />
//         {isLoading && <Loader />}
//         {total === 0 && (
//           <ToastContainer type="error" autoClose={false}>
//             No results found. Please try a different search term.
//           </ToastContainer>
//         )}
//         <ImageGallery images={images} onImageClick={this.handleImageClick} />
//         {images.length === 0 && !isLoading && (
//           <ToastContainer type="error" autoClose={false}>
//             No results found. Please try a different search term.
//           </ToastContainer>
//         )}

//         {showLoadMore && (
//           <Button onClick={this.handleLoadMore} text="Load more" />
//         )}
//         {this.state.showModal && (
//           <ImgModal
//             largeImageURL={this.state.largeImage}
//             tags={this.state.tags}
//             closeModal={this.closeModal}
//           />
//         )}
//       </div>
//     );
//   }
// }
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
  const [error, setError] = useState(null);
  const [tags, setTags] = useState('');
  const [showLoadMore, setShowLoadMore] = useState(false);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const imagesData = await getImages(query, page);
        handleImageData(imagesData);
      } catch (error) {
        console.log(error);
        setError(error);
        setIsLoading(false);
      }
    };

    if (query !== '') {
      fetchData();
    }
  }, [query, page]);

  const handleImageData = (imagesData) => {
    const newTotal = imagesData.total;
    const newImages = imagesData.hits;

    if (newImages.length === 0) {
      toast.warn('Sorry, no images found for your search. Please try again!');
    }

    setImages(prevImages => (page === 1 ? newImages : [...prevImages, ...newImages]));
    setTotal(newTotal);
    setShowLoadMore(newTotal > page * 12);
    setIsLoading(false);
  };
  
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


// export class App extends Component {
//   state = {
//     images: [],
//     query: '',
//     page: 1,
//     isLoading: false,
//     showModal: false,
//     largeImage: '',
//     total: 0,
//     error: null,
//     tags: '',
//     showLoadMore: false,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.fetch(query, page);
//     }
//   }
//   fetch = async (query, page) => {
//     try {
//       const images = await getImages(query, page);
//       if (images.hits.length === 0) {
//         toast.warn('Sorry, no images found for your search. Please try again!');
//       }
//       const newTotal = images.total;
//       const newImages = images.hits;

//       this.setState(prevState => ({
//         images: page === 1 ? newImages : [...prevState.images, ...newImages],
//         total: newTotal,
//         showLoadMore: newTotal > page * 12,
//         isLoading: false,
//       }));
//     } catch (error) {
//       console.log(error);
//       this.setState({ error, isLoading: false });
//     }
//   };

//   handleFormSubmit = query => {
//     this.setState({ query, page: 1, images: [], isLoading: true, error: null });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       isLoading: true,
//     }));
//   };

//   handleImageClick = (largeImage, tags) => {
//     this.setState({ showModal: true, largeImage, tags });
//   };

//   closeModal = () => {
//     this.setState({ showModal: false, largeImage: '', tags: '' });
//   };

//   render() {
//     const { images, isLoading, showLoadMore, total } = this.state;

//     return (
//       <div className={css.App}>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ToastContainer />
//         {isLoading && <Loader />}
//         {total === 0 && (
//           <ToastContainer type="error" autoClose={false}>
//             No results found. Please try a different search term.
//           </ToastContainer>
//         )}
//         <ImageGallery images={images} onImageClick={this.handleImageClick} />
//         {images.length === 0 && !isLoading && (
//           <ToastContainer type="error" autoClose={false}>
//             No results found. Please try a different search term.
//           </ToastContainer>
//         )}

//         {showLoadMore && (
//           <Button onClick={this.handleLoadMore} text="Load more" />
//         )}
//         {this.state.showModal && (
//           <ImgModal
//             largeImageURL={this.state.largeImage}
//             tags={this.state.tags}
//             closeModal={this.closeModal}
//           />
//         )}
//       </div>
//     );
//   }
// }

