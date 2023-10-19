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
root.left.left.left = new Node(60);


//  Brute Force (N*N)

function diameter(root) {
  if (root === null) return 0;

  let leftDiameter = diameter(root.left);
  let rightDiameter = diameter(root.right);

  let heightLeft = height(root.left);
  let heightRight = height(root.right);

  return Math.max(leftDiameter, rightDiameter, heightLeft + heightRight + 1);
}

function height(root) {
  if (root === null) {
    return 0;
  }

  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}



console.log(diameter(root));


//  Better Approach O(n)


class Result {
    constructor(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
}

function findDiameter(root) {
    function calculateDiameterAndHeight(node) {
        if (node === null) {
            return new Result(0, 0);
        }

        const leftResult = calculateDiameterAndHeight(node.left);
        const rightResult = calculateDiameterAndHeight(node.right);

        const height = 1 + Math.max(leftResult.height, rightResult.height);
        const diameter = Math.max(leftResult.diameter, rightResult.diameter, leftResult.height + rightResult.height + 1);

        return new Result(diameter, height);
    }

    const result = calculateDiameterAndHeight(root);
    return result.diameter;
}

console.log(findDiameter(root));