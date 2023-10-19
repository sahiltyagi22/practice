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



function LCA(root , x , y){
    if(root === null || root.data === x || root.data === y){
        return root
    }

    let left = LCA(root.left , x , y)
    let right = LCA(root.right , x , y)

    if(left === null){
        return right
    }else if(right === null){
        return left
    }else{
        return root.data
    }
}

console.log(LCA(root , 40,30));