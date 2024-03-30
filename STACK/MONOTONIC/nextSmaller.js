// finding the next smaller element of each element in an array.
// ex- [1,2,3]=>[-1 ,1,1]

function nextSmaller(arr,n){
    if(n<=1) return [-1]

    let stack =[]
    let resultArr = []

    let k = 2*n

    for(let i=k-1; i>=0; i--){
        while(stack.length!==0 && stack[stack.length-1] >= arr[i%n]){
            stack.pop()
        }

        if(stack.length === 0){
            resultArr[i%n] = -1
        }else{
            resultArr[i%n] = stack[stack.length-1]
        }
        stack.push(arr[i%n])
    }
    return resultArr
   
}

function main(){
    let arr= [5,3,1,2,4,6]
    let n = arr.length 
    let result = nextSmaller(arr,n)

    console.log(result);
}
main()