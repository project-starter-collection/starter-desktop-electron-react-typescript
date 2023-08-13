import React from 'react';
import { render, screen } from '@testing-library/react';
import Page1 from './Page1';

test('renders page 1', () => {
  render(<Page1 />);
  const element = screen.getByText(/Page 1/i);
  expect(element).toBeInTheDocument();
});
