/**
 * https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits/
 * 方案1: 数据都转成二进制存到存到一个新的对象中，存放在num下标，然后直接遍历对象
 * 方案2: 写一个sort方法按照题意返回，比较大小。
 */

 //** 相比结果，方案1 执行耗时小了很多。但是内存占用稍微大了点 方案2 执行耗时一些，内存占用小 **

var sortByBits = function(arr) {
  let obj = {};

  if(arr.length<=1) return arr;
  for(let i=0; i<arr.length; i++) {
      const binary = arr[i].toString(2);
      const nums =  (binary.match(/[1]/g) || []).length
      if(obj[nums]) {
          obj[nums].push(arr[i]) 
      } else {
          obj[nums] = [arr[i]]
      }
  }
  arr = [];
  //对 obj 进行排序
  for(let i in obj) {
      const sortList = obj[i].sort((a, b) => a-b);
      arr = [...arr, ...sortList]
  }
  return arr; 
};

// 思路： 写一个sort方法按照题意返回，比较大小
var sortByBits = function(arr) {

  if(arr.length <=1 ) return arr;

  return arr.sort((a, b) => {
      const count_a = transform(a);
      const count_b = transform(b);
      if(count_a > count_b) 
          return 1;
      else if(count_a < count_b) 
          return -1;
      else {
          return a - b;
      }
  })
  // 返回数字对应的1的个数
  function transform (number) {
      const binary = number.toString(2);
      return (binary.match(/[1]/g) || []).length;
  }
};
