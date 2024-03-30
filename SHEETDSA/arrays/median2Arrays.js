//  There are 2 sorted arrays A and B of size n each. 
// Write an algorithm to find the median of the array obtained after merging the above 2 arrays(i.e. array of length 2n).
//  The complexity should be O(log(n))


//  BRUTE FORCE

// In brute force we can concat both arrays and get the elements by the index and then find the index
// but it has the issue of extra space 




// Bettet approach (we have extra space hypothetically)

function better(arr1,arr2,n1,n2){

    let n = n1+n2

    let index2 = Math.floor(n/2)
    let index1 = index2 -1

    let index1Element = -1
    let index2Element = -1

    let count = 0

    let i=0
    let j=0

    while(i<n1 &&j<n2){
        if(arr1[i] <arr2[j]){
            if(count === index2 ) index2Element = arr1[i]
            if(count === index1) index1Element = arr1[i]
            count++
            i++
        }else{
            if(count === index2 ) index2Element = arr2[j]
            if(count === index1) index1Element = arr2[j]
            count++
            j++
        }
    }

    while(i<n1){
        if(count === index2 ) index2Element = arr1[i]
        if(count === index1) index1Element = arr[i]
        count++
        i++
    }

    while(j<n2){
        if(count === index2 ) index2Element = arr2[j]
            if(count === index1) index1Element = arr2[j]
            count++
            j++
    }

    if(n%2 === 1){
        return index2Element
    }else{
        return Math.floor( (index1Element +index2Element)/2)
    }
}

let arr1 = [1, 12, 15, 26, 38]
let arr2 = [2, 13, 17, 30, 45]

let n1 = arr1.length
let n2 = arr2.length

let result = better(arr1 , arr2, n1 , n2)
console.log(result);