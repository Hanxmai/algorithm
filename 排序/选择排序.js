// 选择排序（Selection Sort）与冒泡排序类似，也是依次对相邻的数进行两两比较。不同之处在于，它不是每比较一次就调换位置，而是一轮比较完毕，找到最大值（或最小值）之后，将其放在正确的位置，其他数的位置不变。
// 时间复杂度 O(n2)


function change(arr) {
  if(arr.length <= 1) return arr; 
  let index;

  for(let i=0; i<arr.length; i++) {

    index = i;

    for(let j=i+1; j<arr.length;j++) {

      if(arr[j] < arr[index]) index = j;
    }

    if(i !== index) [arr[i], arr[index]] = [arr[index], arr[i]]
  }

  console.log(arr)
}

change([10,9,11, 4, 1])