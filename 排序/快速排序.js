/**
 * 快排利⽤的也是分治思想
 * 分治思想： 将一个大问题分成若干个小问题解决
 * （1）在数据集之中，选择一个元素作为"基准"（pivot）。
　  (2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
　 （3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(nlogn)
 */

function quickSort (arr) {
  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  const midVal = arr.splice(mid, 1)[0];
  let left = [], right = [];

  for(let i=0;i<arr.length; i++) {
   ( arr[i] <= midVal ) ? left.push(arr[i]) : right.push(arr[i])
  }

  return quickSort(left).concat([midVal], quickSort(right))
}

console.log(quickSort([85, 24, 63, 45, 17, 31, 96, 50]))
