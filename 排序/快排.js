/**
 * 快排利⽤的也是分治思想
 * 分治思想： 将一个大问题分成若干个小问题解决
 * 
 */
function quick(arr) {
  if (arr.length <= 1) { return arr; }
  // let value = arr[len-1];
  const mid = Math.floor(arr.length/2);
  // const priant = arr[mid];

  const priant = arr.splice(mid, 1)[0];
  // console.log("priant", priant)

  let left =[];
  let right = [];
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > priant) {
      right.push(arr[i]);
    } else {
      left.push(arr[i])
    }
  }
  console.log(quick(left).concat([priant], quick(right)))
  return quick(left).concat([priant], quick(right))
  
}
quick([4,2,3,6,19,20,1,5])