// Problem Statement: You are given an array ‘arr’ of size ‘n’ which denotes the position of stalls.
// You are also given an integer ‘k’ which denotes the number of aggressive cows.
// You are given the task of assigning stalls to ‘k’ cows such that the minimum distance between any two of them is the maximum possible.
// Find the maximum possible minimum distance.


function possible(arr, distance, cows) {
    let cow = 1;
    let last = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - last >= distance) {
        cow++;
        last = arr[i];
      }
    }
  
    return cow >= cows;
  }
  
//   function brute(arr, cows) {
//     let n = arr.length;
//     arr.sort((a, b) => a - b);
  
//     let min = arr[0];
//     let max = arr[n - 1];
  
//     if (cows == 2) {
//       return max - min;
//     }
  
//     for (let i = 1; i < max - min; i++) {
//       if (possible(arr, i, cows) === false) {
//         return i - 1;
//       }
//     }
  
//     return -1;
//   }
  
//   let arr = [0, 3, 4, 7, 10, 9];
//   let cows = 4;
  
//   console.log(brute(arr, cows));
  

  function binary(arr,cows){
    let n = arr.length

    let low = 0
    let high = arr[n-1] -  arr[0]
  
    let ans =-1
    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(possible(arr,mid,cows)=== true){
            ans = mid
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return ans
  }

  let arr = [0, 3, 4, 7, 10, 9];
  let cows = 4;
  
  console.log(binary(arr, cows));