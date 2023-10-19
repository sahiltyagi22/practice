//  Implementing a bst from a pre order traversal

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

// class BST{
//     insertNode(root,data){
//         if(!root){
//             return new Node(data)
//         }

//         if(data > root.data){
//             root.right = this.insertNode(root.right , data)
//         }else if(data < root.data){
//             root.left = this.insertNode(root.left , data)
//         }

//         return root
//     }
// }


// let tree = new BST()

// let root = null
// root = tree.insertNode(root,50)

// tree.insertNode(root,40)
// tree.insertNode(root,30)
// tree.insertNode(root,20)
// tree.insertNode(root,80)


function BSTfromPre(preOrder){
    let index = {val :0}

    function helper(preOrder , min , max){
        if(index.val > preOrder.length) return null

        let currentValue = preOrder[index.val]

        if(currentValue < min  || currentValue > max){
            return null
        }

        const newNode = new Node(currentValue)
        index.val++

        newNode.left =helper(preOrder , min , currentValue)
        newNode.right = helper(preOrder , currentValue , max)

        return newNode
    }

    return helper(preOrder , -Infinity , Infinity)
}

let preOrder = [50 , 40, 30 , 20, 80]

let result = BSTfromPre(preOrder)

console.log(result);



function inOrderTraversal(node, result = []) {
    if (node === null) {
        return result;
    }
    inOrderTraversal(node.left, result);
    result.push(node.value);
    inOrderTraversal(node.right, result);
    return result


}


let traverse = inOrderTraversal(result)
