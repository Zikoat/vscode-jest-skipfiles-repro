const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', async () => {
  const result = await sum(1, 2);
  expect(result).toEqual(3);
});
