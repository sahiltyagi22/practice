/**
 * Using same approach as MovingZeroToEnd
 */


function negativeToEnd(arr){
    if(arr.length<1){
       return
    }
    let count = 0
    for(let i = 0 ; i< arr.length; i++){
       if(arr[i]<0){
           [arr[i], arr[count]]= [arr[count], arr[i]]
           count++
       }
       
    }
    return arr
}



let arr = [1,2,-4,3,-2,1]
let n  = arr.length


// console.log(negativeToEnd(arr,n));


/**
 * Moving negative to right
 */


function negativeToRight(arr,n){
    let low = 0
    let high =  n-1
   

    while(low<=high){
        if(arr[low] > 0){
            low++
          
        }else if(arr[low] < 0){
            [arr[high] , arr[low]] =  [arr[low] , arr[high]]
            high--
            
        }
    }

    return arr
}

let arr1 = [1,2,-4,3,-2,1]
let n1 = arr.length


console.log(negativeToRight(arr1,n1));