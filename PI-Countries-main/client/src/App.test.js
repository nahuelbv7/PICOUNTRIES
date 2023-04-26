import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// https://www.students.soyhenry.com/classes/142?cohortId=88&videoOrdinal=4 MINUTO 26