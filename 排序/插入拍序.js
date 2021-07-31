// 插入拍序： 我们将数组中的数据分为两个区间，已排序区间和未排序区间。初始已排序区间只有⼀个元素，就是数组的第⼀ 个元素。插⼊算法的核⼼思想是取未排序区间中的元素，在已排序区间中找到合适的插⼊位置将其插⼊，并保证已排序 区间数据⼀直有序。重复这个过程，直到未排序区间中元素为空，算法结束。
// 时间复杂度 O(n2), 最好是O(n) 空间复杂度 O(1）

// function inserSort(arr) {
//   const len =arr.length;
//   let val  // 记录当前比较的值

//   for(let i=0; i<len; i++) {
//     val = arr[i];

//     for(let j=i-1; j>-1; j--) { 
//       if(arr[j] > val) {
//         arr[j+1] = arr[j]
//       } else {
//         break;
//       }
//       arr[j] = val
//     }
//   }
//   console.log(arr)
// }
inserSort([4,5,6,3,2,1])


function inserSort(arr) {
  const len = arr.length;
  if(len <= 1) return arr;

  for(let i=0; i<len; i++) {
    let val = arr[i];

    for(let j=i-1; j>=0; j--) {
      if(val < arr[j]) {
        arr[j+1] = arr[j]
      } else {
        break;
      }
      arr[j] = val
    }
  }
  console.log(arr)
}