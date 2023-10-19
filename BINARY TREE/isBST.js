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

function isBST(root , min , max){
    if(root === null) return true

    if(root.data<min || root.data > max){
        return false
    }

    return (
        isBST(root.left , min , root.data-1) &&
        isBST(root.right , root.data+1 , max)
    )
}


console.log(isBST(root , min , max));