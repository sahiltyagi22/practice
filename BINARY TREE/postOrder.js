class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left= new Node(4)
root.left.right= new Node(7)
root.left.left.left= new Node(5)
root.left.left.right= new Node(6)
root.right.right = new Node(8)
root.right.right.left = new Node(9)
root.right.right.right = new Node(10)

function postOrder(root){
    if(root === null) return 

    postOrder(root.left)
    postOrder(root.right)
    console.log(root.data)
}

postOrder(root)