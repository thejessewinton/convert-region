import { convertRegion } from '../index';

test('Convert abbreviation to full name.', () => {
  expect(convertRegion.toFullName('NY')).toBe('New York');
});
