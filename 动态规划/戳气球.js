/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  if(nums.length === 1) return nums[0]


  let max = 0;
  for(let i=1; i< nums.length-1; i++) {

      let sum = 0;
      let array = [9,76,64,21];
      while(array.length >= 1) {
          let left = i>0 ? array[i-1]: 1;
          let right = i <array.length ? array[i+1] : 1;
          sum += array[i] * left * right;

          if(array.length >= 3) {
              array.splice(i, 1);
          } else {
              array.splice(0, 1);
          } 

          max = sum > max ? sum : max;
      }
  }
  return max
};