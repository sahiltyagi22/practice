const nodemon = require("nodemon")

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
root.right.left = new Node(60)
root.right.right = new Node(70)




// Anti-clock wise O(n)
function boundaryTraversal(root){
    let result = []
    if(root!==null){
        result.push(root.data)
    }

    leftboundary(root.left,result)

    leafNodes(root , result)

    rightBoundary(root.right , result)

    return result
}


function leftboundary(root, result){
    if(root!==null){
        if(root.left!==null){
            result.push(root.data)
            leftboundary(root.left , result)
        }else if(root.right!==null){
            result.push(root.data)
            leftboundary(root.right , result)
        }
        
    }
}

function rightBoundary(root, result){
    if(root!==null){
        if(root.right!==null){
            result.push(root.data)
            rightBoundary(root.right , result)
        }else if(root.left!==null){
            result.push(root.data)
            rightBoundary(root.left , result)
        }
    }
}

function leafNodes(root, result){
    if(root!==null){
        leafNodes(root.left , result)
        if(root.left === null && root.right === null){
            result.push(root.data)
        }
        leafNodes(root.right , result)
    }
}

console.log(boundaryTraversal(root));



// ClockWise 
function printBoundaryClockWise(root){
    let result = []
    if(root!==null){
        result.push(root.data)
    }

    printBoundaryRight(root.right , result)

    printLeaf(root, result)

    printBoundaryLeft(root.left, result)

    return result
}

function printBoundaryRight(root , result){
    if(root!==null){
        if(root.right!==null){
            result.push(root.data)
            printBoundaryRight(root.right, result)
        }else if(root.left!==null){
           result.push(root.data)
           printBoundaryRight(root.left , result)
        }
    }
}

function printBoundaryLeft(root,result){
    if(root!==null){
        if(root.left!==null){
            result.push(root.data)
            printBoundaryLeft(root.left , result)
        }else if(root.right!==null){
            result.push(root.data)
            printBoundaryLeft(root.right , result)
        }
    }
}


function printLeaf(root , result){
    if(root!==null){
        printLeaf(root.right , result)
        if(root.left === null && root.right ===  null){
            result.push(root.data)
        }
        printLeaf(root.left , result)
    }
}

console.log(printBoundaryClockWise(root));


