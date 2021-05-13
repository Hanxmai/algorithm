const tree = [{
  id:1,
  children: [{
    id:2,
    children: [{
      id:3
    }]
  }, {
    id: 4
  }]
}]
// 正常递归实现
function getPath (tree, id, path) {

  for(let i=0; i<tree.length; i++) {

    const item = tree[i];
    console.log(item.id);

    if(path) item.path = path + '>' + item.id;
      else item.path = item.id;
      if(item.id === id) return item.path;
      if(item.children) {
        const ref = getPath(item.children, id, item.path);
        if(ref) return ref;
      }
    }
}

// console.log("path", getPath(tree, 4))


// 利用栈 非递归实现
function getPath3 (tree, id) {
  const list = []
  for(let i=tree.length-1; i>=0; i--) {
    const item = tree[i];
    item.path = item.id;
    list.push(item);
  }

  while(list.length) {
    const curNode = list.pop()
    if(curNode.id === id) return curNode.path;
    if(curNode.children)
      curNode.children.forEach(item => {
        item.path = curNode.path +'>'+ item.id;
        list.push(item)
      })
  }
}

console.log(getPath3(tree, 3))