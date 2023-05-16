import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=34476830-b52e87f2018fae84058c602d8&image_type=photo&orientation=horizontal';

export const getImages = async (query, page) => {
  try {
    const response = await axios.get(`&per_page=12&page=${page}&q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to search for images.'); // повернути помилку
  }
};
