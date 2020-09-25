import React from 'react';
import { render } from '@testing-library/react';
import FilterOptions from './FilterOptions';

test('renders FilterOptions without crashing', () => {
  render(<FilterOptions />);
});
