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

    findMinMax(root) {
        if (root === null) {
            return { min: null, max: null };
        }

        let currentNode = root;

        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }

        const min = currentNode.data;

        currentNode = root;

        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }

        const max = currentNode.data;

        return { min, max };
    }
}


let tree = new BST()

let root = null
root = tree.insertNode(root,50)

tree.insertNode(root,40)
tree.insertNode(root,30)
tree.insertNode(root,20)
tree.insertNode(root,80)

// console.log(root);

let minMax = tree.findMinMax(root)
console.log(minMax);