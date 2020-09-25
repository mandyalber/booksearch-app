import React from 'react';
import { render } from '@testing-library/react';
import SearchBox from './SearchBox';

test('renders SearchBox without crashing', () => {
  render(<SearchBox />);
});
