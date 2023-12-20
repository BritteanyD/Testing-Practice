const capitalize = require('./capitalize')

// 1. Test for the capitalize function
test('capitalize should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
  });