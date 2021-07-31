const splitFunc = require('../其他/以某个长度分割数组.js');

test('分割数组', () => {
  expect(splitFunc(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
  expect(splitFunc([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
  expect(splitFunc([0, 1, 2, 3, 4, 5], 2)).toEqual([[0, 1], [2, 3], [4, 5]]);
  expect(splitFunc([0, 1, 2, 3, 4, 5, 6], 3)).toEqual([[0, 1, 2], [3, 4, 5], [6]]);
  expect(splitFunc([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
  expect(splitFunc([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
})