// find max consecutive 1 by flipping k no. of zeros.

function maxOnes(arr , n, k){
    if(n===0) return 0 

    let maxCount = 0

    for(let i=0; i<n; i++){
        let flip = k 
        let count = 0
        for(let j=i; j<n; j++){
            if(arr[j]===1){
                count++
                maxCount = Math.max(maxCount , count)
            }
             if(arr[j]===0){
                if(flip > 0){
                    count++
                    maxCount =Math.max(maxCount , count)
                    flip-- 
                }else{
                    break;
                }
            }
        }
    }

    return maxCount
}

// better solution 

function maxConsecutiveOnes(arr,n,k){
    if(n===0) return 0

    let left = 0
    let right = 0
    let maxCount = 0

    let flip = k

    let count = 0
    while(right < n){
        if(arr[right]===1){
            count++
            maxCount = Math.max(maxCount , count)
            right++
        }else{
            if(flip>0){
                count++
                maxCount = Math.max(maxCount , count)
                right++
                flip--
            }else{
                count = 0
                left = right
                flip = k
            }
        }
    }
    return maxCount
}

function main(){
    let arr =[1,1,1,0,0,0,1,1,1,1,0]
    let n = arr.length 
    let k = 2

    let result = maxConsecutiveOnes(arr,n,k)
    console.log(result);
}

main()