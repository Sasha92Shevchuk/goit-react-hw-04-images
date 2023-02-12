import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header, Form, FormButton, FormInput, Span } from './Searchbar.styled';
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
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <FormButton type="submit">
            <CiSearch size="2em" />
            <Span>Search</Span>
          </FormButton>

          <FormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchText}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
