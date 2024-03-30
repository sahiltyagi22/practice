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

class Sum {
    constructor() {
        this.sum = Number.MIN_SAFE_INTEGER;
    }
}

function maximumPathSum(root) {
    let result = new Sum();
    helperFunction(root, result);
    return result.sum;
}

function helperFunction(root, result) {
    if (root === null) return 0;

    let leftSum = Math.max(helperFunction(root.left, result), 0);
    let rightSum = Math.max(helperFunction(root.right, result), 0);

    let currentSum = root.data + leftSum + rightSum;
    result.sum = Math.max(result.sum, currentSum);

    return root.data + Math.max(leftSum, rightSum);
}

console.log(maximumPathSum(root));


class Solution{
    constructor(){
        this.sum = 0
    }

    maximumSum(root){
        this.maxSum(root)
        return this.sum
    }

    maxSum(root){
        if(root === null) return 0

       const leftSum = Math.max(0, this.maxSum(root.left))
       const rightSum = Math.max(0, this.maxSum(root.right))

       this.sum = Math.max(this.sum , leftSum+rightSum+root.data)

       return Math.max(leftSum , rightSum) +root.data
    }
}

const solution = new Solution()
let result = solution.maximumSum(root)
console.log(result);