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


function LCA(root , p , q){
    if(root === null) return null

    if(root.data > p && root.data > q){
        return LCA(root.left , p , q)
    }else if(root.data < p && root.data < q){
        return LCA(root.right , p, q)
    }else{
        return root.data
    }
}

let p = 20
let q = 30

let result = LCA(root, p, q)

console.log(result);