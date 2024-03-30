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

    treeIntoArray(root , elements){
        if(root === null) return 

       this.treeIntoArray(root.left,elements)
       elements.push(root.data)
       this.treeIntoArray(root.right,elements)

       return elements

    }


    KLargest(root , k){
        let array = new Array()
        let resultArrray = this.treeIntoArray(root , array)

        return resultArrray[k-1]
    }
}


let tree = new BST()

let root = null
root = tree.insertNode(root,50)

tree.insertNode(root,40)
tree.insertNode(root,30)
tree.insertNode(root,20)
tree.insertNode(root,80)

let KthLargest = tree.KLargest(root ,2)
console.log(KthLargest);

console.log(root.data);

