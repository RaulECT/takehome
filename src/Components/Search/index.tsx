import React from 'react';
import styled from '@emotion/styled/macro';
import { FaSearch } from 'react-icons/fa';
import { SIZES, COLORS } from '../../Utils/generalStyles';

type SearchProps = {
  placeholder: string;
  onSearch: (value: string) => void;
}

const Container = styled.section`
  width: 31rem;
  padding: 1rem;
  background: ${COLORS.GREY};
  display: flex;
  color: rgba(55,50,60, 0.5);
  align-items: center;
  border-radius: 10px;
  font-size: ${SIZES.SEARCH_TEXT};
  gap: 0.5rem;
`;

const InputSearch = styled.input`
  background: transparent;
  font-size: ${SIZES.SEARCH_TEXT};
  color: ${COLORS.BLACK};
  border: none;

  ::placeholder {
    color: rgba(55,50,60, 0.5);
    font-weight: bold;
  }

  :focus-visible {
    outline: none;
  }
`;

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => (
  <Container>
    <FaSearch />
    <InputSearch placeholder={placeholder} onChange={e => onSearch(e.target.value)} />
  </Container>
);

export default Search;