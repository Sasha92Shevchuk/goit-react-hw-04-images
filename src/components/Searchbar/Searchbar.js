import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Header, Form, FormButton, FormInput, Span } from './Searchbar.styled';
import { CiSearch } from 'react-icons/ci';
import { toast } from 'react-toastify';

export default function Searchbar({ onSubmit }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = e => {
    setSearchText(e.currentTarget.value.toLowerCase().trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchText === '') {
      toast.error('Enter you search request');
      return;
    }
    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
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
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
