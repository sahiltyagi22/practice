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


//  By level order

function heightOfTree(root){
    if(root === null) return 0

    let queue = []
    queue.push(root)

    let curr = root
    let height = 0

    while(queue.length >0){
        let size = queue.length

        while(size-- >0){
            let currentNode = queue.shift()

            if(currentNode.left!==null){
                queue.push(currentNode.left)
            }
            if(currentNode.right!==null){
                queue.push(currentNode.right)
            }
        }
        height++
    }
    return height
}

let result = heightOfTree(root)
console.log(result);