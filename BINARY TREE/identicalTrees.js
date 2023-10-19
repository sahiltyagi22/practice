//  check if the tree is identical or not


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function areIdentical(root1, root2) {
    if (root1 === null && root2 === null) {
        return true;
    }

    if (root1 === null || root2 === null) {
        return false;
    }

    return (
        root1.data === root2.data &&
        areIdentical(root1.left, root2.left) &&
        areIdentical(root1.right, root2.right)
    );
}

// Example usage:

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);

console.log(areIdentical(root1, root2)); // Output: true

// Example with non-identical trees
let root3 = new Node(1);
root3.left = new Node(2);

let root4 = new Node(1);
root4.right = new Node(2);

console.log(areIdentical(root3, root4)); // Output: false
