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
        return 
    }

   

    inOrder(root.left)
   console.log(root.data);
    inOrder(root.right)

  
}

(inOrder(root))