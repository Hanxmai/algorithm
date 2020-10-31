// 选择排序算法的实现思路有点类似插⼊排序，也分已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到 最⼩的元素，将其放到已排序区间的末尾。

function chooseSort(arr) {
  function findMinItem (arr) {
    let min = arr[0];
    for(let i=1; i<arr.length; i++) {
      if(arr[i] < min) {
        min = arr[i]
      }
    }
    return min
  }
  for(let i=0; i<arr.length; i++) {
    
  }
}