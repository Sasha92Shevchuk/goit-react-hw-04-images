import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import * as instanceAPI from 'services/api';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { Box } from './App.styled';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCards, setSearchCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { hits, totalHits } = await instanceAPI.getImages(
          searchQuery,
          page
        );
        if (totalHits === 0) {
          toast.warning(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (totalHits > 0 && page === 1) {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }
        if (totalHits > 0 && totalHits === searchCards.length + hits.length) {
          toast.info(
            `We're sorry, but you've reached the end of search results.`
          );
        }
        setSearchCards(prevState => [...prevState, ...hits]);
        setIsVisible(
          1 < Math.ceil(totalHits / (searchCards.length + hits.length))
        );
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, page]);

  const onFormSubmit = value => {
    if (value === searchQuery) {
      toast.warning('Please, enter new search query and try again.');
      return;
    } else {
      setSearchQuery(value);
      setSearchCards([]);
      setIsLoading(false);
      setError(null);
      setPage(1);
    }
  };
  const LoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Box>
      <Searchbar onSubmit={onFormSubmit} />
      <ToastContainer autoClose={3000} />
      {error && <h1>{error.message}</h1>}
      {isLoading && <Loader />}
      <ImageGallery searchCards={searchCards} />
      {isVisible && (
        <Button
          loadMore={LoadMore}
          isLoading={isLoading}
          disabled={isLoading}
        />
      )}
    </Box>
  );
}

// failed deploy without description
