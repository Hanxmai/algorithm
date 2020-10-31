/**
 * 有一个m*n的网格，每个格子数字非0，每次只能向下或者向右移动一格，求从坐上角移动到右下角数字的最大值
 * 
 */


function test(array) {
  let m = array.length;
  let n = array[0].length;
  let dp = Array.from(new Array(m), (n) => new Array(n));

  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(i!==0 && j!==0) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + array[i][j];
      } else if(i===0 && j!==0) {
        dp[i][j] = dp[i][j-1] + array[i][j];
      } else if(i!==0 && j===0) {
        dp[i][j] = dp[i-1][j] + array[i][j];
      } else {
        dp[i][j] = array[i][j]
      }
    }
  }

  console.log(dp[m-1][n-1])
  return dp[m-1][n-1]
}

test([
  [1,3,1],
  [1,5,1],
  [4,2,1]
])

