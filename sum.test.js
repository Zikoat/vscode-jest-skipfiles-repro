const sum = require('./index.js');

test('adds 1 + 2 to equal 3', async () => {
  const result = await sum(1, 2);
  expect().toBe(3);
});
