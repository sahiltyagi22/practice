class Queue {
    constructor() {
      this.items = [];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    enqueue(x) {
      this.items.push(x);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    display() {
      for (const item of this.items) {
        console.log(item);
      }
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

function levelOrder(root) {
    if (root === null) {
        return "";
    }

    let store = new Queue();
    store.enqueue(root);

    let ans = "";
    while (!store.isEmpty()) {
        let curr = store.dequeue();
        ans += curr.data + " ";

        if (curr.left !== null) {
            store.enqueue(curr.left);
        }

        if (curr.right !== null) {
            store.enqueue(curr.right);
        }
    }

    return ans.trim();
}

console.log(levelOrder(root));


