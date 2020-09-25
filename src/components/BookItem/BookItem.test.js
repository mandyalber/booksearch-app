import React from 'react';
import { render } from '@testing-library/react';
import BookItem from './BookItem';

test('renders BookItem without crashing', () => {
  render(<BookItem />);
});
