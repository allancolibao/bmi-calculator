const total = require('./about.ts');

test('adds 3 + 4 to equal 7', () => {
  expect(total(3, 4)).toBe(7);
});