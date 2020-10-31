// 查找最后⼀个⼩于等于给定值的元素

function  erfen(arr, value) {
  let start = 0;
  let end = arr.length -1;

  while(start<=end) {
    let mid = Math.floor(start + end);
    if(arr[mid] <= value) {
      if(arr[mid+1] > value || mid === arr.length-1) {
        console.log(mid)
        return mid
      } else {
        start = mid+1
      }
    } else {
      end = mid-1
    }
  }
  return -1;
}

erfen([1,2,2,2,2,2,2,3,3,4], 2)