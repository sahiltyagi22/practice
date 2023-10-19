// Problem Statement: Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays.
// The median is defined as the middle value of a sorted list of numbers. In case the length of the list is even,

// the median is the average of the two middle elements.

/**
 * BRUTE FORCE = > MERGE AND FIND MEDIAN
 */

/**
 * Better Approach
 */

function better(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let n = n1 + n2;

  let index2 = Math.floor(n / 2);
  let index1 = index2 - 1;

  let count = 0;
  let element1 = -1;
  let element2 = -1;

  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      if (count === index1) element1 = arr1[i];
      if (count === index2) element2 = arr1[i];
      count++;
      i++;
    } else {
      if (count === index1) element1 = arr2[j];
      if (count === index2) element2 = arr2[j];
      count++;
      j++;
    }
  }

  while(i<n1){
     if (count === index1) element1 = arr1[i];
      if (count === index2) element2 = arr1[i];
      count++;
      i++;
  }

  while(j<n2){
    if (count === index1) element1 = arr2[j];
    if (count === index2) element2 = arr2[j];
    count++;
    j++;
  }

  if(n%2 === 1) return element2

  let res = Math.floor((element1 + element2) /2)
  return res
}

let arr1 = [2,4,6]
let arr2 = [1,3,5]

console.log(better(arr1,arr2));