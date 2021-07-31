/**
 * 分割一个数组，每个分割的输出长度为size（第二个参数），返回二纬数组
 */

//  function chunkArrayInGroups(arr, size) {
//    const list = [];
//    while(arr.length) {
//     list.push(arr.splice(0, size))
//    }
//   return list;
// }

 function chunkArrayInGroups(arr, size) {
   const list = [];

  const len = arr.length;
  let i = 0;

  while(len > i) {
    list.push(arr.slice(i, i+=size))
  }

   return list;
}

module.exports = chunkArrayInGroups;
