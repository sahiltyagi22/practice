// we have to find a subarray with a given sum


function subArray(arr,n,sum){

    let decrement=0
    let increment=0

    let curr =0
    while(increment<n){
        curr += arr[increment]
        
        while(curr > sum){
            curr -= arr[decrement]
            decrement++
        }

        if(curr === sum){
            return true
        }
        decrement++
    }

    return false
}

function main(){

    let arr = [1,4,20,3,10,5]
    let n = arr.length 
    let sum = 33 

    let result = subArray(arr,n,sum)
    console.log(result);
}

main()