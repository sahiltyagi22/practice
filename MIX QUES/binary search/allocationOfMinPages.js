/*
Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. 
There are a ‘m’ number of students, and the task is to allocate all the books to the students.
Allocate books in such a way that:

-Each student gets at least one book.
-Each book should be allocated to only one student.
-Book allocation should be in a contiguous manner.

You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. 
If the allocation of books is not possible. return -1
*/

/*

function pages(arr,page){
    let noPages = 0
    let student =1

  for(let i=0; i<n; i++){
    if(noPages + arr[i] <= page){
        noPages += arr[i]
    }else{
        student++
        noPages = arr[i]
    }
  }
  return student
}


function allocation(arr,ns,n){
    let min = Math.max(...arr)
    let max = arr.reduce((acc,value)=> acc+value , 0) 

    if(ns===n) return min
    if(ns > n) return -1

    
    for(let i = min ; i<=max; i++){
        if(pages(arr,i) === ns) return i
    }
    return min
}

var arr = [25, 46, 28, 49, 24];
var n = 5;
var ns = 4;

console.log(allocation(arr,ns,n));

*/

/**
 * Binary search
 */


function pages(arr,page){
    let noPages = 0
    let students =1

  for(let i=0; i<arr.length; i++){
    if(noPages + arr[i] <= page){
        noPages += arr[i]
    }else{
        students++
        noPages = arr[i]
    }
  }
  return students
}


function allocation(arr,ns,n){
    let min = Math.max(...arr)
    let max = arr.reduce((acc,value)=> acc+value , 0) 

    if(ns===n) return min
    if(ns > n) return -1

    let low = min
    let high = max
    
    while(low<=high){
        let mid = Math.floor((low+high)/2)

        let NoOfPages = pages(arr,mid)

        if(NoOfPages >ns) {
            low = mid+1
        }else{
            high = mid-1
        }
    }

    return low
  
}

var arr = [25, 46, 28, 49, 24];
var n = 5;
var ns = 4;

console.log(allocation(arr,ns,n));