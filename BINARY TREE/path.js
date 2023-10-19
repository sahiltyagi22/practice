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



function path (root , arr , x){
    if(!root) return false 

    arr.push(root.data)

    if(root.data === x){
        return true
    }

    if(path(root.left ,arr, x) || path(root.right , arr , x)){
        return true
    }

    arr.pop()
    return false

}

let arr = []
let x =50
let result= path(root , arr , x)

if(result === true){
    console.log(arr);
}else{
    console.log("node not present in tree")
}