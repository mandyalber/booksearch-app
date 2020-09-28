import React from 'react';
import { render } from '@testing-library/react';
import BookItem from './BookItem';

test.skip('renders BookItem without crashing', () => {
  render(<BookItem {...{}}/>);
});
