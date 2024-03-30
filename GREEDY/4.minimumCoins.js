// Problem Statement: Given a value V, if we want to make a change for V Rs,
// and we have an infinite supply of each of the denominations in Indian currency, i.e.,
// we have an infinite supply of { 1, 2, 5, 10, 20, 50, 100, 500, 1000} valued coins/notes, what is the minimum number of coins and/or notes needed to make the change.

function brute(arr, n, value) {
  
  if(n===0 || value === 0) return 0 

  let minCoins = 0
  let required = value 
  let currentMin;  
  let index = -1

  while(required >0){
    for(let i=0; i<n; i++){
        if(arr[i] <= required){
            currentMin = arr[i]
        }else{
            index = i 
            break
        }
    }

    required = required - currentMin 
    minCoins += 1 
  }
  return minCoins
}


// better approach 

function better (arr,n, value){
    if(n===0 || value === 0) return 0 

  let minCoins = 0

  for(let i=n-1; i>=0; i--){
    while(value >= arr[i]){
        value -= arr[i]
        minCoins += 1
    }
  }

  return minCoins


}


function main(){
    let arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000]
    let n = arr.length 
    let k = 49

    let result = better(arr,n,k)
    console.log(result);
}

main()