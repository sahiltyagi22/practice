
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


function nodeInsert(root,value){
    if(!root){
        root = new Node(value)
        return root
    }

    if(value < root.data){
        if(root.left === null){
            root.left = new Node(value)
    }else{
        nodeInsert(root.left , value)
    }
         
    }else if(value > root.data){
        if(root.right === null){
            root.right = new Node(value)
        }else{
            nodeInsert(root.right , value)
        }
    }

    return root
}

console.log(nodeInsert(root , 90));