import { render, screen } from '@testing-library/react';
import App from './App';

test('return the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/NoboMovie/i);
  expect(linkElement).toBeInTheDocument();
});
