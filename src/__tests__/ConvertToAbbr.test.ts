import { convertRegion } from '../index';

test('Convert abbreviation to full name.', () => {
  expect(convertRegion.toAbbreviation('New York')).toBe('NY');
});
