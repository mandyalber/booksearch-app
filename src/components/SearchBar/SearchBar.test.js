import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar without crashing', () => {
  render(<SearchBar searchTerm=''/>);
});
