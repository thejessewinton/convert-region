import { convertRegion } from '../index';

test('Convert abbreviation to full name.', () => {
  expect(convertRegion.toFullName('NY')).toBe('New York');
});

test('Convert lower case abbreviation to full name.', () => {
  expect(convertRegion.toFullName('ny')).toBe('New York');
});

test('Convert mixed case abbreviation to full name.', () => {
  expect(convertRegion.toFullName('Ny')).toBe('New York');
});
