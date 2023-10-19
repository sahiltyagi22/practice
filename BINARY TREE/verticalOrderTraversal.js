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
  
  function vertical(root) {
    if (!root) {
      return [];
    }
  
    const result = new Map(); // Use a map to store nodes at each vertical level
    const queue = [];
    queue.push({ node: root, hd: 0 }); // hd (horizontal distance) of the root is 0
  
    while (queue.length > 0) {
      const { node, hd } = queue.shift();
  
      if (!result.has(hd)) {
        result.set(hd, []);
      }
  
      result.get(hd).push(node.data);
  
      if (node.left) {
        queue.push({ node: node.left, hd: hd - 1 });
      }
  
      if (node.right) {
        queue.push({ node: node.right, hd: hd + 1 });
      }
    }

    const storesMap = new Map([...result.entries()].sort((a,b)=>a[0]-b[0]))
  
    // Convert the map values to an array of arrays and return
    return Array.from(storesMap.values());
  }
  
  console.log(vertical(root));
  