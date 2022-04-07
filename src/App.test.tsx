import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Input } from './components/Input/Input';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('React App');
  expect(linkElement).toBeInTheDocument();
});

