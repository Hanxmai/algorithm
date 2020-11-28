//  实现一个MyQueue 类，改类用两个栈来实现一个队列

/**
 * 思路：
 * 栈： 先入后出
 * 队列： 先入先出
 * 两个list模拟两个栈，每次操作存入的时候，只存入list1， 当操作取数据的时候，将list1的时候放入list2， 再将list2的数据取出，list1数据减去相应的值
 * */

var MyQueue = function() {
  this.list1 = [];
  this.list2 = [];
};

MyQueue.prototype.push = function(x) {
  this.list1.push(x)
};

MyQueue.prototype.pop = function() {

  while(this.list1.length) {
    this.list2.push(this.list1.pop())
  }
  const peek = this.list2.pop();
  while(this.list2.length) {
    this.list1.push(this.list2.pop())
  }
  return peek;
};

// 
MyQueue.prototype.peek = function() {
  return this.list1[0]
};

MyQueue.prototype.empty = function() {
  return !this.list1.length;
};


const queue = new MyQueue();

queue.push(1);
queue.push(2);
const a = queue.peek();  // 返回 1
const b = queue.pop();   // 返回 1
console.log(a, b)
queue.empty(); // 返回 false