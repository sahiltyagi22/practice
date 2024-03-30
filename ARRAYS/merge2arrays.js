//  merge two arrays without extra space in sorted order



//  Brute force(using an extra space)  using two pointers

function merge(arr1 , arr2 , n,m){
    let space = new Array(n+m)

    let left = 0
    let right = 0

    let index = 0

    while(left <n && right <m){
        if(arr1[left] < arr2[right]){
            space[index] =arr1[left]
            left++ , index++
        }else if(arr1[left] > arr2[right]){
            space[index] =arr2[right]
            right++ , index++
    }else{
        space[index] = arr1[left];
            left++, right++, index++;
    }
}
while(left <n){
    space[index] =arr1[left]
    index++ , left++
}
while(right <m){
    space[index] =arr2[right]
    right++ , index++
}


for(let i=0; i<m+n; i++){
    if(i<n){
        arr1[i] = space[i]
    }  else{
           arr2[i-n] = space[i] 
    }
}

return  arr1.concat(arr2)
}

// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 9];
// let n = 4, m = 3;
//  console.log(merge(arr1, arr2, n, m));


/**
 * optimal Solution
 */

function mergerArray(arr1, arr2,n,m){
    let left = n-1
    let right = 0

    while(left >=0 && right <m){
        if(arr1[left] > arr2[right]){
            [arr1[left] , arr2[right]] = [arr2[right] , arr1[left]]
            left-- , right++
        }else{
            break
        }
    }

    arr1.sort((a,b) =>a-b)
    arr2.sort((a,b) =>a-b)

    return [arr1, arr2]
}

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
let n = 4, m = 3;
 console.log(mergerArray(arr1, arr2, n, m));