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
root.right.left= new Node(50)
root.right.right= new Node(50)
root.right.right.right= new Node(50)
root.right.right.right.right= new Node(50)



function check(root){
    if(root === null) return 0

    let leftHeight = check(root.left)
    let rightHeight = check(root.right)

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }
    

    return 1+Math.max(leftHeight , rightHeight)
}

console.log(check(root));