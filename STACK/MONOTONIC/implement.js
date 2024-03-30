// implementing a monotonic increasing  stack

function monotonicIncreasingStack(arr , n){
    let monotoncStack = []

    for(let i=0; i<n; i++){
        if(monotoncStack.length === 0){
            monotoncStack.push(arr[i])
        }else {
            while(monotoncStack.length!==0 && monotoncStack[monotoncStack.length-1] > arr[i]){
                monotoncStack.pop()
            }
            monotoncStack.push(arr[i])
        }
    }
    return monotoncStack
}

function main(){
    let arr= [15, 1,17, 12, 13, 14, 10]
    let n  = arr.length

    let result = monotonicIncreasingStack(arr , n)
    console.log(result);
}

main()

// implementing monotonic decreasing stack

function monotonicDecreasingStack(arr , n){
    if (n<=1) return arr 

    let stack = []

    for(let i=0; i<n; i++){
        if(stack.length === 0){
            stack.push(arr[i])
        }else{
            while(stack.length > 0 && stack[stack.length-1] < arr[i]){
                stack.pop()
            }
            stack.push(arr[i])
        }
    }
    return stack
}