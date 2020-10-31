/**
 * 
 * 1|在万圣节的时候， 迪普和梅宝去向叔公讨要糖果，已知叔公有candies .length包糖果，每包中有一些糖果(candies[i]) ，叔公给了梅宝-一个硬币。
 * 2|如果梅宝抛的硬币结果是正面(coin[i] = 0)， 则梅宝能够得到这包糖果;是反面(coin[i]=1) 则迪普得到这包糖果。
 * 3|梅宝有个魔法能连续 n次抛得硬币结果为正面，但是只能使用一-次。
 * 4|请问梅宝 最多能得到多少颗糖果
 */


/**
 * 1. 找到连续n个coins中包含对应没有获得糖果数最多的糖果数
 * 2. 找到下标是0的糖果 并加上1的结果
 */
// [7,4,3,1,9,7,99,6],[1,1,1,0,0,0,0,0],3

function getMaxCandies(candies, coins, num) {

  // 求变化的coins的最大的
  function changeCoins(n) {
    let sum = 0;
    for(let i=0; i<num; i++) {
      if(coins[i+n]) sum += candies[i+n]
    }
    return sum;
  }

  let max = 0, orinialSum= 0;
  for(let i=0; i<coins.length; i++) {
    if(coins[i]) {
      max = Math.max(max, changeCoins(i));
    } else {
      orinialSum += candies[i]
    }
  }

  console.log( max+orinialSum)
  return max+orinialSum;
}

getMaxCandies([3,5,7,2,8,8,15,3],[1,0,1,0,1,0,1,0],3)
getMaxCandies([7,4,3,1,9,7,99,6],[1,1,1,1,1,1,1,1],3)
