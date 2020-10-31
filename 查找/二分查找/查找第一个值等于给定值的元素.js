// 查找第一个值等于给定值的元素
/**
 * 二分查找的思想：
 * 头尾两个指针，计算出mid值
 * 如果value小于mid值，则让尾指针指向mid-1，如果value大于mid，则让头指针指向mid-1
 * 时间复杂度: O(logN)
 */
function erfen(arr, value) {
  // arr是有序的
  let start = 0;
  let end = arr.length -1;
  while(start <= end) {
    let mid = Math.floor((start+end)/2)
    if(arr[mid] === value) {
      if(mid ===0 || arr[mid-1] !== value) {
        console.log(mid)
        return mid
      } else {
        end = mid -1;
      }
    } else if(value > arr[mid]) {
      start = mid+1;
    } else {
      end = mid-1;
    } 
  }
  return -1;

}

erfen([1,2,2,2,2,2,2,3,3,4], 4)