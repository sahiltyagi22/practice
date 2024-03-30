// The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate,
//  the span of stocks price for all n days. 
// The span Si of the stocks price on a given day i is defined as the maximum number of consecutive days just before the given day,
//  for which the price of the stock on the given day is less than or equal to its price on the current day.

// For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, then the span values for corresponding 7 days are
//  {1, 1, 1, 2, 1, 4, 6}.

function brute(arr,n){
    if(n===0) return []

    let spans = []

    for(let i=0; i<n; i++){
        let currentSpan = 1
        for(let j=i-1; j>=0; j--){
            if(arr[j] < arr[i]) currentSpan += 1
            else break;
        }
        spans.push(currentSpan)
    }

    return spans
}


// better approach using minStack 

function better(arr,n){
    if(n===0) return []

    let spans = []
    let stack = []

    let currentSpan = 1 
    let totalPopped = 0
    for(let i=0; i<n; i++){
        while(stack.length && stack[stack.length-1] < arr[i]){
            stack.pop() 
            totalPopped += 1
        }
        stack.push(arr[i])

        console.log(totalPopped);
         totalPopped
        spans.push(currentSpan + totalPopped)
        
    }
    return spans
}

function main(){
    let arr = [10, 4, 5, 90, 120, 80]
    let n =arr.length

    let result = better(arr,n)
    console.log(result);
}
main()