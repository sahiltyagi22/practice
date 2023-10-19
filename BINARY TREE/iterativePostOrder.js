class Stack{
    constructor(c){
        this.capacity = c
        this.arr =[]
        this.top =-1
    }

    push(x){
        if(this.top === this.capacity-1) {return "stack is full"}
        this.top++
        this.arr[this.top] = x
    }

    pop(){
        if(this.top ==-1) {return "stack is empty"}
        let res = this.arr[this.top]
        this.top--
        return res
    }

    peek(){
        if(this.top == -1){return "stack is empty"}
        return this.arr[this.top]
    }

    isEmpty(){
        if(this.top === -1) return true
    }

    top(){
        if(this.size === -1) return null
        return this.arr[this.size]
    }
}

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


function post(root){
    if(root === null) return []

    let store = new Stack()
    store.push(root)
    let ans = []

    while(!store.isEmpty()){
        let curr = store.pop()
        ans.push(curr.data)

        if(curr.right!==null){
            store.push(curr.right)
        }
        if(curr.left!==null){
            store.push(curr.left)
        }
    }

    return ans.reverse()
}

console.log(post(root))

