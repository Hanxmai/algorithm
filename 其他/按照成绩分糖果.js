/**
 * 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。

  你需要按照以下要求，帮助老师给这些孩子分发糖果：

  每个孩子至少分配到 1 个糖果。
  评分更高的孩子必须比他两侧的邻位孩子获得更多的糖果。
  那么这样下来，老师至少需要准备多少颗糖果呢？

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/candy
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

  
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const len = ratings.length;
  if(!len) return 0;

  let list = Array(len).fill(1);
  for(let i=1; i<len; i++) {
    if(ratings[i] > ratings[i-1]) list[i] = list[i-1]+1;
  }
  console.log(list)

  for(let i=len-2; i>=0; i--) {
    if(ratings[i] > ratings[i+1] && list[i] <= list[i+1] ) list[i] = list[i+1]+1
  }
  console.log(list)

  return list.reduce((sum, val) => sum+=val, 0)
};

// console.log(candy([1,7,7,3,4,4,4,1]));


setImmediate(function() {
  console.log('immediate1');
  process.nextTick(function() {
      console.log('immediate1_nextTick');
  })
  new Promise(function(resolve) {
      console.log('immediate1_promise');
      resolve();
  }).then(function() {
      console.log('immediate1_then')
  })
})

setTimeout(function() {
  console.log('timeout1');
  process.nextTick(function() {
      console.log('timeout1_nextTick');
  })
  new Promise(function(resolve) {
      console.log('timeout1_promise');
      resolve();
  }).then(function() {
      console.log('timeout1_then')
  })
}, 3)

process.nextTick(function() {
  console.log('outer_nextTick');
})
new Promise(function(resolve) {
  console.log('outer_promise');
  resolve();
}).then(function() {
  console.log('outer_then')
})