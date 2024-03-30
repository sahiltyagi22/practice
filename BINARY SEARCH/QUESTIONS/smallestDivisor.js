// You are given an array of integers ‘arr’ and an integer i.e. a threshold value ‘limit’.
//  Your task is to find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it,
//   the sum of the division’s result is less than or equal to the given threshold value.


function check(arr,element){
    let n = arr.length 

    let sum = 0

    for(let i=0; i<n; i++){
        sum += Math.ceil(arr[i] /element)
    }
    return sum
}


function smallestDivisor(arr, limit){
    let n = arr.length 

    if(n>limit) return -1 

    let ans  = Infinity 

    let low =1
    let high = Math.max(...arr)

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(check(arr,mid)<=limit){
            ans = mid 
            high = mid-1
        }else{
            low =mid+1
        }
    }
    return ans
}

function main(){
    let arr =[8,4,2,3]
    let limit = 10

    let result = smallestDivisor(arr,limit)
    console.log(result);
}

main()