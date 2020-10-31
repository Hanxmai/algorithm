// 插入拍序： 我们将数组中的数据分为两个区间，已排序区间和未排序区间。初始已排序区间只有⼀个元素，就是数组的第⼀ 个元素。插⼊算法的核⼼思想是取未排序区间中的元素，在已排序区间中找到合适的插⼊位置将其插⼊，并保证已排序 区间数据⼀直有序。重复这个过程，直到未排序区间中元素为空，算法结束。


function inserSort(arr) {
  if(arr.length <=1) return arr
  for (let i=1; i<arr.length; i++) {
    let value = arr[i];
    for(let j=i-1; j>=0; j--) {
      if(value < arr[j]) {
        // 往后移动一位数据
        arr[j+1] = arr[j]
      } else {
        break;
      }
      // 数据插入
      arr[j] = value
    }
  }
  
  console.log(arr)
}
inserSort([4,5,6,3,2,1])