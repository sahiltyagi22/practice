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


function rightView(root, level, result) {
    if (root === null) return;

    if (level === result.length) {
        result.push(root.data);
    }

    rightView(root.right, level + 1, result);
    rightView(root.left, level + 1, result);
}

let result = [];
rightView(root, 0, result);
console.log(result);
