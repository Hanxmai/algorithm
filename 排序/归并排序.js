/** 将两个已经排序的数组合并，要比从头开始排序所有元素来得快。因此，可以将数组拆开，分成n个只有一个元素的数组，然后不断地两两合并，直到全部排序完成。
 归并排序使⽤的就是分治思想。分治，顾名思义，就是分⽽治之，将⼀个⼤问题分解成⼩的⼦问题来解决。⼩的⼦问题 解决了，⼤问题也就解决了.

 时间复杂度O(nlogn)
 */

 function merge (left, right) {
  const result = [];
  let il = 0, ir = 0;

  while(il < left.length && ir < right.length) {
    (left[il] < right[ir]) ? result.push(left[il++]) : result.push(right[ir++])
  }
  return result.concat(left.slice(il), right.slice(ir))
 }

 function mergeSort (arr) { 
  if(arr.length < 2) return arr;

  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right))
 }

 console.log(mergeSort([85, 24, 63, 45, 17, 31, 96, 50]))
 