import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from '../Styled/Styles.module.css';
import { CiSearch } from 'react-icons/ci';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };
  state = {
    searchText: '',
  };
  handleChange = e => {
    this.setState({
      searchText: e.currentTarget.value.toLowerCase().trim(),
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchText === '') {
      toast.error('Enter you search request');
      return;
    }
    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };
  render() {
    const { searchText } = this.state;
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchForm__button}>
            <CiSearch size="2em" />
            <span className={css.SearchForm__button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchText}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
