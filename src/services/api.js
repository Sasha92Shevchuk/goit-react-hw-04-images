import axios from 'axios';

const API_KEY = '32149613-f346d44487708b1f8ebf92444';

export const getImages = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
