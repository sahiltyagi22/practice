class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  let root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.left.left = new Node(40);
  root.left.right = new Node(50);
  
  function topView(root) {
    if (!root) {
      return [];
    }
  
    const result = new Map(); 
    const queue = [];
    queue.push({ node: root, hd: 0 }); 
  
    while (queue.length > 0) {
      const { node, hd } = queue.shift();
  
      if (!result.has(hd)) {
        result.set(hd, node.data);
      }
  
      if (node.left) {
        queue.push({ node: node.left, hd: hd - 1 });
      }
  
      if (node.right) {
        queue.push({ node: node.right, hd: hd + 1 });
      }
    }

    const storesMap = new Map([...result.entries()].sort((a,b)=>a[0]-b[0]))
  
    return Array.from(storesMap.values());
  }
  
  console.log(topView(root));
  