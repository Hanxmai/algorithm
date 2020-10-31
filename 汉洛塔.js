// 捍洛塔
var hanota = function(A, B, C) {
  function fun(A, B, C, len) {
      if(len === 0) return;

      fun(A, C, B, len-1);

      C.push(A.pop());

      fun(B, A, C, len-1);
      // console.log(A,B,C)

  };
  fun(A, B, C, A.length);
  console.log(A,B,C);

};

// 输出路径
// var hanota = function(A, B, C) {
//   function fun(A, B, C, len) {
//       if(len === 0) return;
//       fun(A, C, B, len-1);
//       console.log(A+'=>'+C)
//       fun(B, A, C, len-1);
//   };
//   fun(A, B, C, 3);
// };

// hanota('A', 'B', 'C')
// hanota([3,2,1], [], [])



//