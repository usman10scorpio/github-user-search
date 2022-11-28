import { render, screen } from '@testing-library/react';
import Search from './Search';


test('React search component find heading text', () => {
  render(<Search  />);
  const linkElement = screen.getByText(/Github user Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('React search component find placeholder text in input tag', () => {
    render(<Search  />);
    const linkElement = screen.getByPlaceholderText('Enter the user you want to search ...')
    expect(linkElement).toBeInTheDocument();
});

test('React search component find search text in button tag', () => {
    render(<Search  />);
    const linkElement = screen.getByRole('button', { name: /Search/i})
    expect(linkElement).toBeInTheDocument();
});