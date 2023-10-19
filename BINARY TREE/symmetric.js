class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

let root = new Node(10)
root.left = new Node(20)
root.right = new Node(30)
root.left.left= new Node(40)
root.left.right= new Node(50)


function symmetric(root) {
    if (root === null) return true;

    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
    if (left === null && right === null) return true;

    if (left === null || right === null) return false;

    return (left.data === right.data) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

console.log(symmetric(root));