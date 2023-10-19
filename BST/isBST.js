class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    insertNode(root,data){
        if(!root){
            return new Node(data)
        }

        if(data > root.data){
            root.right = this.insertNode(root.right , data)
        }else if(data < root.data){
            root.left = this.insertNode(root.left , data)
        }

        return root
    }
}


let tree = new BST()

let root = null
root = tree.insertNode(root,50)

tree.insertNode(root,40)
tree.insertNode(root,30)
tree.insertNode(root,20)
tree.insertNode(root,80)



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


let min  = Number.MAX_SAFE_INTEGER
let max = Number.MAX_SAFE_INTEGER
console.log(isBST(root));