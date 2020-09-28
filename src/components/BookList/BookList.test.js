import React from 'react';
import { render } from '@testing-library/react';
import BookList from './BookList';

test('renders BookList without crashing', () => {
  render(<BookList books={[]} />);
});
