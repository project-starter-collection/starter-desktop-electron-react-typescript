import React from 'react';
import { render, screen } from '@testing-library/react';
import Page2 from './Page2';

test('renders page 2', () => {
  render(<Page2 />);
  const element = screen.getByText(/Page 2/i);
  expect(element).toBeInTheDocument();
});
