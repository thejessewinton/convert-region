import { convertRegion } from '../index';

test('Convert full name to abbreviation.', () => {
  expect(convertRegion.toAbbreviation('New York')).toBe('NY');
});

test('Convert lower case full name to abreviation.', () => {
  expect(convertRegion.toAbbreviation('New york')).toBe('NY');
});

test('Normalize full name to abreviation.', () => {
  expect(convertRegion.toAbbreviation('Yucatán')).toBe('YUC');
});
