/**
 * https://leetcode-cn.com/problems/burst-balloons/submissions/
 * 思考：
 * 最后一步要执行的操作一定是： num[-1]* 点爆最后一个气球k *num[length]
 * 相当于前面执行的就是全部点爆k前和k后的所有气球
 * 
 * 状态转移方程：
 * dp[i][j] = dp[i][k-1]+dp[k+1][j]+ nums[k-1]*mums[k]*mums[k+1]
 */

var maxCoins = function(nums) {

    function getMaxCoins(nums, i, j) {
        // 边界条件
        if(i>j) return 0;

        for(let k=i; k<=j; k++){
            // 左边
            const left = getMaxCoins(nums, i, k-1)
            // 右边
            const right = getMaxCoins(nums, k+1, j)
            // 状态转移方程 [0, nums[k], 0]
            const calcute = nums[i-1] * nums[k] * nums[j+1]; 
            dp[i][j] = Math.max(dp[i][j], left + calcute + right);
        }
        return dp[i][j]
    }

    let n = nums.length;
    let array = [1, ...nums, 1];
    let dp = Array.from(new Array(n+2), () => new Array(n+2).fill(0));

    return getMaxCoins(array, 1, n);
};