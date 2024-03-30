// Given an array which contains integer values,
//  we need to make all values of this array equal to some integer value with minimum cost where the cost of changing an array value x to y is abs(x-y). 

// brute force 

function equal(arr,n){
    if(n===0) return 0 

    let minimumCost = Infinity

    for(let i=0; i<n; i++){
        let cost = 0
        for(j=0; j<n; j++){
            cost+= Math.abs(arr[i]-arr[j])
        }
        minimumCost = Math.min(minimumCost , cost)
    }

    return minimumCost
}

function main(){
    let arr = [4, 6]
    let n = arr.length 

    let result = equal(arr,n)
    console.log(result);
}

main()