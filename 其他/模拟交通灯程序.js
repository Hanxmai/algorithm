/**
 * 编程模拟一个交通灯系统
要求:

1. 要求网页上红, 绿, 黄三种颜色交替展示
2. 每种颜色停留的时间是固定的数值, 比如绿灯10s, 黄灯3s, 红灯5s
3. 同时展示倒计时
4. 顺序: 红色 -> 黄色 -> 绿色
5. 循环往复不能停止
6. 选做: 有可能可以设置启动, 停止, 恢复操作
 */

function *main(){
  var nextval;
  while(true) {
    if(!nextval) {
      nextval = 1;
    } else {
      nextval = (3 * nextval) +6;
    }

    yield nextval;
  }
}

for(v of main()) {
  console.log(v)

  if(v > 500) {
    break;
  }
}

