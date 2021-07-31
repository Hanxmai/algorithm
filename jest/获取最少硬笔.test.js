const func = require('../其他/获取最少硬币.js');

test('字符串相加计算', () => {
  expect(func([1, 2, 5], 11)).toBe(3);
  expect(func([2], 3)).toBe(-1);
  expect(func([1], 0)).toBe(0);
  expect(func([1], 1)).toBe(1);
  expect(func([1], 2)).toBe(2);
});