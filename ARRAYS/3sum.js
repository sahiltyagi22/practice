// Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero.
//  In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i,
//  and their sum is equal to zero.


/**
 * Brute force using 3 loops
 */


// function threeSum(arr, n) {
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = i + 2; k < n; k++) {
//         // if(arr[i] === arr[j] || arr[j] === arr[k] || arr[k] === arr[i]){
//         //     continue
//         // }

//         if (arr[i] + arr[j] + arr[k] === 0) {
//           let temp = [arr[i], arr[j], arr[k]];
//           temp.sort((a, b) => a - b);
//           res.push(temp);
//         }
//       }
//     }
//   }

//   let set = new Set(res.map(JSON.stringify));
//   res = Array.from(set).map(JSON.parse);
//   return res;
// }

// let arr = [-1, 0, 1, 2, -1, -4];
// let n = arr.length;
// console.log(threeSum(arr, n));

/**
 * Better approach using 2 loops
 */


function triplet(arr,n){
 let ans =[]

 for(let i=0; i<n; i++){
    let hashSet = new Set()
    for(let j=i+1; j<n; j++){
        let third = -(arr[i] + arr[j])

        if(hashSet.has(third)){
            let temp = [arr[i] , arr[j] , third]
                temp.sort((a,b)=> a-b)

                ans.push(temp)
            }

            hashSet.add(arr[j])
        }
    }

    let set = new Set(ans.map(JSON.stringify))
    ans = Array.from(set).map(JSON.parse)

    return ans
 }



let arr1 = [-1, 0, 1, 2, -1, -4];
let n1= arr1.length;
console.log(triplet(arr1, n1));


/**
 * Optimal Approach (two pointer)
 */

function triplet(arr,n){
  arr.sort((a,b) => a-b)

  let ans  = []

  for(let i=0; i<=n-2; i++){
    if(i>0 && arr[i] === arr[i-1]) continue
    let j = i+1
    let k = n-1

    while(j<k){
      let sum = arr[i] + arr[j] + arr[k]

      if(sum<0){
        j++
      }else if(sum>0){
        k--
      }else{
        let temp = [ arr[i] , arr[j] ,arr[k]]
        ans.push(temp)
        j++
        k--
        while(j<k && arr[j] === arr[j-1]) {j++}
        while(j<k && arr[k] === arr[k+1]) {k--}
        
      }
    }
  }
  return ans
}

let arr = [-1, 0, 1, 2, -1, -4];
let n = arr.length;
console.log(triplet(arr, n));
