class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left= new Node(4)
root.left.right= new Node(5)
root.right.right= new Node(6)


function inOrder(root){
    if(root === null){
        return " "
    }

   let ans = ""

   ans+= inOrder(root.left)
   ans+=(root.data);
   ans+= inOrder(root.right)

  return ans
}

console.log((inOrder(root)))