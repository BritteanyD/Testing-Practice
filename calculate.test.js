// 3. Test for the calculator object

const calculator = require('./calculate')

test('calculator should perform basic operations', () => {
    const calc = calculator;
    expect(calc.add(5, 3)).toBe(8);
    expect(calc.subtract(5, 3)).toBe(2);
    expect(calc.multiply(5, 3)).toBe(15);
    expect(calc.divide(6, 2)).toBe(3);
  });