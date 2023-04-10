// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Counter setCount={0}/>);
})

test('renders counter message', () => {
  const cM = screen.getByText(/Counter/i);
  expect(cM).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const iZ = screen.getByText(/0/i);
  //const x = screen.getByTestId('data-testid');
  expect(iZ).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByText(/0/i);

  expect(countElement).toBeInTheDocument;

  
  fireEvent.click(incrementButton);

  const countElement1 = screen.getByText(/1/i);
  expect(countElement1).toBeInTheDocument;
});

test('clicking - decrements the count', () => {
  const dB = screen.getByText('-');
  const countElement = screen.getByText(/0/i);

  expect(countElement).toBeInTheDocument;

  fireEvent.click(dB);

  const countElement2 = screen.getByText(/-1/i);

  expect(countElement2).toBeInTheDocument;
});
