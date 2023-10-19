function countOccur(arr,n,x){
    let firstOccur = fisrt(arr,n,x)
if(firstOccur=== -1) return -1

let lastOccur = last(arr,n,x)
return (lastOccur - firstOccur)+1
}

function fisrt(arr,n,x){
    let low =0
    let high = n-1

    let ans =-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid]===x){
            if(mid ===0 || arr[mid-1]!==x){
                ans = mid
                break;
            }else{
                high = mid-1
            }
        }else if(arr[mid] >x){
            high = mid-1
        }else{
            low = mid+1
        }
    }

    return ans
}


function last(arr,n,x){
    let low =0
    let high = n-1

    let ans =-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid]===x){
            if(mid === n-1 || arr[mid+1]!==x){
                ans = mid
                break;
            }else{
                low = mid+1
            }
        }else if(arr[mid] >x){
            high = mid-1
        }else{
            low = mid+1
        }
    }

    return ans
}


let arr =[1,2,3,4,4,4,5,5]
let n = arr.length
let x = 4

console.log(countOccur(arr,n,x));




