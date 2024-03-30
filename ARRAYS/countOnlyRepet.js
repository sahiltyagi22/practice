// Given an array arr[] of N positive integers, where elements are consecutive (sorted).
//  Also, there is a single element which is repeating X (any variable) number of times. 
//  Now, the task is to find the element which is repeated and number of times it is repeated.
// Note: If there's no repeating element, Return {-1,-1}.



// taking  O(n) time 
function myApproach(arr,n){
    
    let count = 1
    let targetElement = -1

    for(let i=0; i<n; i++){
        if(arr[i] === arr[i+1]){
            count++
            targetElement = arr[i]
        }
    }
    if(count === 1){
        return [-1,-1]
    }else{
        return [targetElement , count]
    }
}

// we have to solve this in logn time (binary search)

function optimal(arr,n){
    if(n<=1) return [-1,-1]
    if(n===2 && arr[0]===arr[1]){
        return [arr[0] , 2]
    }

    let left = 0
    let right = n-1 

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid] === arr[mid-1] || arr[mid] === arr[mid+1]){
            let count = 1 

            let j = mid
            while(j+1<n && arr[j]===arr[mid]){
                count++
                j++
            }

             j = mid-1

             while(j>=0 && arr[j-1] === arr[mid]){
                count++
                j--
             }

             return [arr[mid] , count]
        }else if(arr[mid]- arr[left] === mid-left){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return [-1,-1]
}




function main(){
    let arr = [1,2,3,4,4]
    let n = arr.length 

    let result = optimal(arr,n)
    console.log(result);
}

main()