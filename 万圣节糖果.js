/**
 * 1. 获取一个数组中连续n个值相加值最大的情况
 * 2. 记录从第index个开始，到第index+n结束
 * 3. 加上小于index，大于index+n的需要被相加的值
 */

/**
 * 
 * @param {array} candies 
 * @param {array} coins 
 * @param {num} num 
 */
function getMaxCandies(candies, coins, num){

  // 获取连续n个值的和
  function getNCandies(n) {
    let sum = 0;
    for(let i=0; i<num; i++) {
      sum+=candies[n+i]
    }
    return sum;
  }

  let maxNCandies = getNCandies(0);
  let index = 0;  //记录从第几个开始连续的最大的数

  for(let i=1; i<=candies.length-num; i++) {

    // 比较最大的n个连续的值的和
    if(getNCandies(i) > maxNCandies) {
      maxNCandies = getNCandies(i)
      index = i;
    }
  }
  console.log(index)
  let max = maxNCandies;
  
  //相加糖果数
  for(let j=0; j<coins.length; j++) {

    if(j<index || j>index+num) {
      max+=coins[j]*candies[j];
    }
  }

  console.log("aaa", max);
}

getMaxCandies([7,4,3,1,9,7,99,6],[1,1,1,0,0,0,0,0],3)
// getMaxCandies([3,5,7,2,8,8,15,3], [1,0,1,0,1,0,1,0], 3);
