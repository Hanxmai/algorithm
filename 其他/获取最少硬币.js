/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。
 */


module.exports = function getCoins (coins, amount) {
  if(!amount) return 0;

  const len = coins.length;
  if(!len) return -1;
  coins = coins.sort((m,n) => n-m);

  let count = 0;
  let sum = amount;
  for(let i=0; i<len; i++) {
    count += Math.floor(sum/coins[i]);
    sum = sum%coins[i];

    if(!sum) return count;
  }
  return sum ? -1 : count;
}


getCoins([186,419,83,408], 6249)
