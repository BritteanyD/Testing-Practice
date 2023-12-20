const reverseString = require('./reverseString')

// 2. Test for the reverseString function
test('reverseString should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('')).toBe('');
});