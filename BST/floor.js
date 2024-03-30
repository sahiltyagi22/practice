class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  insertNode(root, data) {
    if (!root) {
      return new Node(data);
    }

    if (data > root.data) {
      root.right = this.insertNode(root.right, data);
    } else if (data < root.data) {
      root.left = this.insertNode(root.left, data);
    }

    return root;
  }

  floor(root, key) {
    let ans = -1;

    while (root) {
      if (root.data === key) {
        ans = root.data;
        return ans;
      }
      
      if(key > root.data) {
        ans = root.data; 
        root = root.right;
      } else {
        root = root.left;
      }
    }

    return ans;
  }
}

let tree = new BST();
 
let root = null;
root = tree.insertNode(root, 50);

tree.insertNode(root, 40);
tree.insertNode(root, 30);
tree.insertNode(root, 20);
tree.insertNode(root, 80);

let result = tree.floor(root, 70);

console.log(result);
