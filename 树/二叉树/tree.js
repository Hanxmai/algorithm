// 二叉树遍历
class treeNode {
  constructor (val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
  
}

const tree = new treeNode(1);
tree.left = new treeNode(2);
tree.left.left = new treeNode(4);
tree.left.right = new treeNode(5);
tree.right = new treeNode(3);
tree.right.left = new treeNode(6);
tree.right.right = new treeNode(7);

// [1]
// [2, 3]
// [4, 5, 6, 7

// [1, 2, 4, 5, 3, 6, 7]
// 4 2 5 1 6 3 7
// 4526731


function diguiTree(root) {
  root.left = root.left && diguiTree(root.left);
  root.right = root.right && diguiTree(root.right);
  console.log(root.val);
}

diguiTree(tree)


