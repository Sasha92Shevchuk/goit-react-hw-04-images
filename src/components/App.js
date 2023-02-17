import { Component } from 'react';
import Searchbar from './Searchbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import * as instanceAPI from 'services/api';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { Box } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    searchCards: [],
    isLoading: false,
    isVisible: false,
    error: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.state.searchQuery;
    const page = this.state.page;
    // if (prevSearch === nextSearch) {
    //   toast.warning('Please, enter new search query and try again.');
    //   return;
    // }

    if (prevSearch !== nextSearch || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await instanceAPI.getImages(
          nextSearch,
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
        if (
          totalHits > 0 &&
          totalHits === this.state.searchCards.length + hits.length
        ) {
          toast.info(
            `We're sorry, but you've reached the end of search results.`
          );
        }
        this.setState(prevState => ({
          searchCards: [...prevState.searchCards, ...hits],
          isVisible:
            1 <
            Math.ceil(
              totalHits / (this.state.searchCards.length + hits.length)
            ),
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onFormSubmit = value => {
    if (value === this.state.searchQuery) {
      toast.warning('Please, enter new search query and try again.');
      return;
    } else {
      this.setState({
        searchQuery: value,
        searchCards: [],
        isLoading: false,
        error: null,
        page: 1,
      });
    }
  };
  LoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { searchCards, isVisible, isLoading, error } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ToastContainer autoClose={3000} />
        {error && <h1>{error.message}</h1>}
        {isLoading && <Loader />}
        <ImageGallery searchCards={searchCards} />
        {isVisible && (
          <Button
            loadMore={this.LoadMore}
            isLoading={isLoading}
            disabled={isLoading}
          />
        )}
      </Box>
    );
  }
}
