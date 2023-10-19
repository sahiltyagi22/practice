
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



function zigZag(root){
    
    let result  = []
    let queue = [root]
    let reverse = false

    while(queue.length > 0){
        let currentLevel = []
        let nextLevel = []

        for(let node of queue){
            currentLevel.push(node.data)

            if(node.left!==null){
                nextLevel.push(node.left)
            }

            if(node.right!==null){
                nextLevel.push(node.right)
            }
        }

        if(reverse){
            currentLevel.reverse()
        }

        result.push(currentLevel)
        queue = nextLevel
        reverse = !reverse
    }

    return result.flat()
}

console.log(zigZag(root));