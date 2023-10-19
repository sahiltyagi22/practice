//   find the height of binary tree


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


// height of tree

function height(root){
    if(root === null){
        return 0
    }

    let leftHeight =  height(root.left)
    let rightHeight =  height(root.right)

    return 1 + Math.max(leftHeight , rightHeight)
}

console.log(height(root));