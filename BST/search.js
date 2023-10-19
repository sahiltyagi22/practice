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

  search(root, data) {
    if (root === null) return false;

    if (root.data === data) return true;

    if (data > root.data) {
      return this.search(root.right, data);
    } else if (data < root.data) {
      return this.search(root.left, data);
    }
  }
}

let tree = new BST();

let root = null;
root = tree.insertNode(root, 50);
tree.insertNode(root, 40);
tree.insertNode(root, 30);
tree.insertNode(root, 20);
tree.insertNode(root, 80);

let result = tree.search(root, 40);
console.log(result);

// console.log(root);
