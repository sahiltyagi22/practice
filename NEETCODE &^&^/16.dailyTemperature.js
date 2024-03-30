// Given an array of integers temperatures represents the daily temperatures,
//  return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
//   If there is no future day for which this is possible, keep answer[i] == 0 instead.



// Brute approach O(n*n)
function brute(arr,n){
    if(n<=1) return [0]

    let ans  = []
    ans[n-1] = 0 

    for(let i=0; i<n-1; i++){
        let days = -1
        for(let j=i+1; j<n; j++){
            if(arr[j] > arr[i]){
                days = j-i 
                ans[i] = days
                break;
            }
        }

        if(days=== -1){
            ans[i] = 0
        }
    }

    return ans
}


// better approach using stack 

function better(arr,n){
    if(n===0) return -1 
    if(n===1) return [0]

    let stack = []
    stack.push([arr[n-1] , n-1 ])
    let ans = []
    ans[n-1] = 0

    for(let i=n-2; i>=0; i--){
        
        
        while(stack.length && stack[stack.length-1][0] < arr[i]){
            stack.pop()
        }

        if(stack.length){
            ans[i] = stack[stack.length-1][1] - i
        }else{
            ans[i]= 0 
        }

        stack.push([arr[i] , i])
    }
    return ans
}


function main(){
    let arr = [73,74,75,71,69,72,76,73]
    let n = arr.length 

    let result = better(arr,n)
    console.log(result);
}
main()