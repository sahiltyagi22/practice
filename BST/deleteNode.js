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
tree.insertNode(root,45)
tree.insertNode(root,30)
tree.insertNode(root,20)
tree.insertNode(root,80)


function deleteNode(root , key){
    if(root ===  null) return null

    if(key > root.data){
        root.right = deleteNode(root.right , key)
    }else if(key < root.data){
        root.left = deleteNode(root.left , key)
    }else{
        if(root.left === null) return root.right
        else if(root.right === null) return root.left


        root.data = findMinValue(root.right)
        console.log(root.data);

        root.right = deleteNode(root.right , root.data)
    }

    return root
}


function findMinValue(root){
    while(root.left !== null){
        root = root.left
    }

    return root.data
}

console.log(deleteNode(root , 40));


