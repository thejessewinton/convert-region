import { convertRegion } from '../index';

test('Convert full name to abbreviation.', () => {
  expect(convertRegion('New York')).toBe('NY');
});

test('Convert lower case full name to abreviation.', () => {
  expect(convertRegion('New york')).toBe('NY');
});

test('Normalize full name to abreviation.', () => {
  expect(convertRegion('Yucatán')).toBe('YUC');
});

test('Convert abbreviation to full name.', () => {
  expect(convertRegion('NY')).toBe('New York');
});

test('Convert lower case abbreviation to full name.', () => {
  expect(convertRegion('ny')).toBe('New York');
});

test('Convert mixed case abbreviation to full name.', () => {
  expect(convertRegion('Ny')).toBe('New York');
});
