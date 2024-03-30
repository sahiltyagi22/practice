// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

function brute(arr,n,k){
    if(n===0 || k===0) return 0
    if(k>=n) return arr.reduce((acc,value)=>acc+value ,  0)

    let left = 0
    let right = n-1 
    let sum = 0

    while(left<right && k>0){
        if(arr[left] > arr[right]){
            sum += arr[left]
            k--
            left++
        }else if(arr[right]>=arr[left]){
            sum+= arr[right]
            k-- 
            right--
        }else{
            if(arr[left+1] > arr[right-1]){
                left++
            }else{
                right--
            }
        }
    }
    return sum
}

function main(){
    let arr = [1,2,3,4,5,6,1]
    let n = arr.length
    let k=3 

    let result = brute(arr,n, k)
    console.log(result);
}
main()