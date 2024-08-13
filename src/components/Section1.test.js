import { render, screen } from '@testing-library/react';
import Section1 from './Section1';

test('renders Section 1 content', () => {
  render(<Section1 />);
  const headingElement = screen.getByText(/Welcome to Section 1/i);
  expect(headingElement).toBeInTheDocument();
});
