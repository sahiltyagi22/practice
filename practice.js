// // function moores(arr,n){
// //   let count = 0
// //   let element;
// //   for(let i=0; i<n; i++){
// //     if(count == 0){
// //       count =1
// //       element = arr[i]
// //     }else if(element == arr[i]){
// //       count++
// //     }else{count--}

// //   }

// //   let count1 =0
// //   for(let i=0; i<n; i++){
// //     if(arr[i] === element){
// //       count1++
// //     }
// //   }

// //   if(count1 > Math.floor(n/2)){
// //     return element
// //   }

// //   return -1
// // }

// // // let arr = [1,2,2,2,3,2,2,4]
// // // let n = arr.length

// // // console.log(moores(arr,n));

// // function insertion(arr,n){
// //   for(let i=1; i<n; i++){
// //     let key = arr[i]
// //     let j = i-1

// //     while(j>=0 && arr[j]> key){
// //       arr[j+1] = arr[j]
// //       j--
// //     }

// //     arr[j+1] = key
// //   }
// //   return arr
// // }

// // let arr1  = [2,5,1,6,8,1,9]
// // let n1 = arr1.length

// // console.log(insertion(arr1,n1));

// function Tsum(arr,n){
//   arr.sort((a,b)=>a-b)
//   let res = []
//   for(let i=0; i<n-2;i++){
//     if(i>0 && arr[i] === arr[i-1]) continue
//     let j= i+1
//     let k = n-1

//     while(j<k){
//       let sum = arr[i]+arr[j]+arr[k]

//       if(sum<0) j++
//       else if(sum >0) k--
//       else{
//         let temp = [arr[i] , arr[j] , arr[k]]
//         res.push(temp)
//         j++
//         k--
//         while(j<k && arr[j] ===arr[j-1]) j++
//         while(j<k && arr[k] ===arr[k+1]) k--
//       }
//     }
//   }
// return res
// }

// let arr = [1,0,2,4,-1,-1]
// let n= arr.length

// console.log(Tsum(arr,n));

// let str = "hello i am sahil"

// let res = str.split(" ").reverse().join(' ')
// console.log(res);

// bruyte

// function merge(arr1 , arr2,arr3,n,m,p){
//   let res = []

//   let i=0
//     let j=0
//    let k=0
//   while(n<m && n<p){
//     res.push(arr1[i])
//     i++
//     j++
//     k++

//   }
//   return res
// }

//  let n = arr1.length
//  let m = arr2.length
//  let p = arr3.length

//  console.log(merge(arr1,arr2,arr3,n,m,p));

// let arr1 = [2,4,6]
// let arr2  = [1,3]

// let res = arr1.concat(arr2)
// res.sort((a,b)=>a-b)

// let n = res.length

// let median = Math.floor((0+(n-1))/2)
// console.log(res);
// console.log(median);

// function student(name,rollno){
//     return (name, rollno);
// }

// console.log(student('avinash',30));
// student('sahil')

function bubble(arr) {
  let n = arr.length;
  let flag;
  for (let i = 0; i < n - 1; i++) {
    flag = false;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (flag === false) break;
  }
  return arr;
}

// let arr = [3, 1, 9, 8, 6, 4];
// let result = bubble(arr);
// console.log(result);

function selection() {
  let n = arr.length;
  if (n <= 1) return arr;

  for (let i = 0; i < n - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    if (min_index !== i) {
      [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
  }
  return arr;
}
// let arr = [3, 1, 9, 8, 6, 4];
// let result = selection(arr);
// console.log(result);

function insertion(arr) {
  let n = arr.length;
  if (n <= 1) return arr;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
// let arr = [3, 1, 9, 8, 6, 4];
// let result = insertion(arr);
// console.log(result);

function mergeSort(arr, low, high) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  return merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  return arr;
}

// let arr = [3, 1, 9, 8, 6, 4];
// let n = arr.length
// let low =0
// let high = n-1
// let result = mergeSort(arr,low,high);
// console.log(result);

function lomuto(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return arr;
}

// let arr = [3, 1, 9, 8, 6, 4];
// let n = arr.length
// let low =0
// let high = n-1
// let result = lomuto(arr,low,high);
// console.log(result);

// function lomuto (arr,low,high){
//   let pivot = arr[high]
//   let i = low-1

//   for(let j= low; j<=high; j++){
//       if(arr[j] <pivot){
//           i++;
//           [arr[i] , arr[j]] = [arr[j] , arr[i]]
//       }
//   }
//   [arr[i+1] , arr[high]] = [arr[high] , arr[i+1]]
//   return i+1
// }

// function hoares(arr, low, high) {
//   let pivot = arr[low];
//   let i = low - 1;
//   let j = high + 1;
//   while (true) {
//     do {
//       i++;
//     } while (arr[i] < pivot);
//     do {
//       j--;
//     } while (arr[j] > pivot);

//     if (i >= j) return arr;

//      [arr[i], arr[j]] = [arr[j], arr[i]]

// }
// }
// let arr = [3, 1, 9, 8, 6, 4];
// let n = arr.length;
// let low = 0;
// let high = n - 1;
// let result = hoares(arr, low, high);
// console.log(result);

// function hoares(arr, low, high) {
//   let pivot = arr[low];

//   let i = low - 1;
//   let j = high + 1;

//   while (true) {
//     do {
//       i++;
//     } while (arr[i] < pivot);
//     do {
//       j--;
//     } while (arr[j] > pivot);
//     if (i >= j) {
//       return arr;
//     }
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
// }

// function insert(arr, index,element){
//   let n = arr.length

//   for(let i =n-1; i>=index; i--){
//     arr[i+1] = arr[i]
//   }
//   arr[index] = element

//   return arr
// }

// let arr = [1,2,4,5]
// let index = 2
// let element = 3

// console.log(insert(arr,index,element));

// function insertAtEnd(arr,element){
//   let n = arr.length

//   arr[n] = element

//   return arr
// }

// let arr = [1,2,4,5]

// let element = 3

// console.log(insertAtEnd(arr,element));

// function maximumIndex(arr){
//   let n = arr.length

//   let ans = -1

//   for(let i=0; i<n-1; i++){
//     for(let j=i+1; j<n; j++){
//       if(arr[i] < arr[j]){
//         let temp = j-i

//         ans = Math.max(ans , temp)
//       }
//     }
//   }
//   return ans
// }

// let arr = [1,10]
// console.log(maximumIndex(arr))

// function maximumIndex(arr){
// let n = arr.length

// let prefix = new Array(n)
// let suffix = new Array(n)

// prefix[0] = arr[0]
// suffix[n-1] = arr[n-1]

// for(let i=1; i<n; i++){
//   prefix[i] = Math.min(prefix[i-1] , arr[i])
//   suffix[n-i-1] = Math.max(suffix[n-i] , arr[n-i-1])
// }

// let i=0 ; let j=0; let ans =0

// while(j<n){
//   if(prefix[i] <=suffix[j]){
//     ans = Math.max(ans , j-i)
//     j++
//   }else{
//     i++
//   }
// }
// console.log(ans)
// }

// maximumIndex([34, 8, 10, 3, 2, 80, 30, 33, 1])

// function maxSecondMax(arr){
//   let n = arr.length

// let max = -1
// let secondMax = -1

// for(let i=0; i<n; i++){
//  if(arr[i] > max){
//   max = arr[i]

//   if(arr[i] > secondMax && arr[i]< max){
//     secondMax = arr[i]
//   }
//  }

// }
// return [max , secondMax]
// }

// let arr = [34, 8, 10, 3, 2, 80, 30, 33, 1]
// console.log(maxSecondMax(arr));

// function rotateSorted(arr){
//   let n = arr.length

//   let breakPoint = -1

//   for(let i=0; i<n; i++){
//     if(arr[i] > arr[i+1]){
//       breakPoint = i+1
//       break;
//     }
//   }

//   if(breakPoint === -1) return false
//   if(arr[0]<arr[n-1]) return false;

//   //  checking for is array is sorted on right of breakPoint

//   for(let i=breakPoint; i<n; i++){
//     if(arr[i] > arr[i+1]){
//       return false
//     }
//   }

//   // checking for is array is sorted on left of breakPoint

//   for(let i=0; i<breakPoint-1; i++){
//     if(arr[i] > arr[i+1]){
//       return false
//     }
//   }

//   return true
// }

// let arr = [3,4,1,2]
// console.log(rotateSorted(arr));

// function count1binary(arr) {
//   let n = arr.length;
//   let low = 0;
//   let high = n - 1;
//   let ans = -1; // Initialize ans to -1

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === 1) {
//       ans = mid; // Update ans whenever we find a 1
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return ans + 1; // Return ans + 1 to get the count of 1s
// }

// // Example usage:
// const binaryArray = [0, 0, 0, 1, 1, 1, 1];
// console.log(count1binary(binaryArray)); // Output: 4

// let arr = [1,1,1,1,0,0,0]
// console.log(count1binary(arr));

// function floor(arr , element){
//   let n = arr.length

//   let low =0
//   let high = n-1

//   let ans =-1

//   while(low<=high){
//     let mid = Math.floor((low+high)/2)

//     if(arr[mid] < element){
//       ans = mid
//       low = mid+1
//     }else{
//       high = mid-1
//     }
//   }

//   return ans
// }

// let arr = [1,2,3,4,5]
// let element = 2

// console.log(floor(arr,element));

// function countOccur(arr, n, k) {
//   let countMap = new Map();

//   for (let i = 0; i < n; i++) {
//     if (countMap.has(arr[i])) {
//       countMap.set(arr[i], countMap.get(arr[i]) + 1);
//     } else {
//       countMap.set(arr[i], 1);
//     }
//   }

//   let minCount = n / k;
//   let ans = 0;

//   for (const count of countMap.values()) {
//     if (count > minCount) {
//       ans++;
//     }
//   }
//   return ans;
// }

// let arr = [3,3,3,3,3,3]
// let n = arr.length
// let k = 2

// console.log(countOccur(arr,n,k));

// function union(arr1,arr2){
//   let n = arr1.length
//   let m = arr2.length

//   let ans = []

//   for(let i=0; i<n; i++){
//     if(ans.includes(arr1[i])) continue
//     else ans.push(arr1[i])
//   }

//   for(let i=0; i<m; i++){
//     if(ans.includes(arr2[i])) continue
//     else ans.push(arr2[i])
//   }

//   ans.sort((a,b)=>a-b)

//   return ans
// }

// let arr1 = [1,2,4,5,6]
// let arr2 = [1,2,5,6,7,8]

// console.log(union(arr1,arr2));

// function intersection(arr1 , arr2){
//   let n = arr1.length
//   let m = arr2.length

//   let ans = []

//   let i=0
//   let j=0

//   while(i<n && j<m){
//     if(arr1[i]<arr2[j]){
//       i++
//     }else if(arr1[i]>arr2[j]){
//       j++
//     }else{
//         if(ans.length == 0 || arr1[i]!==ans[ans.length-1]){
//           ans.push(arr1[i])
//         }
//         i++
//         j++
//     }
//   }

//   return ans
// }

// let arr1 = [2,2,3,4,5]
// let arr2 = [1,1,2,3,4]

// console.log(intersection(arr1 , arr2));

// function merge3(arr1 , arr2, arr3){
//   let n = arr1.length
//   let m = arr2.length
//   let p = arr3.length

//   let i=0 ,j=0,k=0

//   let res = []

//   while(i<n && j<m && k<p){
//     let min = Math.min(arr1[i] , arr2[j] , arr3[k])
//     res.push(min)

//     if(min === arr1[i]){
//       i++
//     }else if(min === arr2[j]){
//       j++
//     }else{
//       k++
//     }
//   }

//   while(i<n){
//     res.push(arr1[i])
//     i++
//   }
//   while(j<m){
//     res.push(arr2[j])
//    j++
//   }
//   while(k<p){
//     res.push(arr3[k])
//     k++
//   }
// return res
// }

// let arr1 = [1,2,3,4]
// let arr2=  [1,2,3,4,5,6]
// let arr3 = [1,2,3,4,5,6,7]
// console.log(merge3(arr1 , arr2, arr3));

// function way3(arr, lowValue, highValue) {
//   let n = arr.length - 1;
//   let low = 0;
//   let high = n - 1;
//   let i = 0;

//   while (i <= high) {
//     if (arr[i] < lowValue) {
//       [arr[i], arr[low]] = [arr[low], arr[i]];
//       i++;
//       low++;
//     } else if (arr[i] > highValue) {
//       [arr[i], arr[high]] = [arr[high], arr[i]];
//       high--;
//     } else {
//       i++;
//     }
//   }

//   return arr;
// }

// const arr = [3, 1, 5, 2, 6, 4, 8, 4, 7];
// const lowValue = 4;
// const highValue = 6;

// console.log(way3(arr,lowValue , highValue));

// function threeWayPartition(arr, lowValue, highValue) {
//   let low = 0;
//   let high = arr.length - 1;
//   let i = 0;

//   while (i <= high) {
//     if (arr[i] < lowValue) {
//       // Swap arr[i] with arr[low] and increment both i and low
//       [arr[i], arr[low]] = [arr[low], arr[i]];
//       i++;
//       low++;
//     } else if (arr[i] > highValue) {
//       // Swap arr[i] with arr[high] and decrement high
//       [arr[i], arr[high]] = [arr[high], arr[i]];
//       high--;
//     } else {
//       // Element is in the range, just increment i
//       i++;
//     }
//   }
// }

// // Example usage:
// const arr = [3, 1, 5, 2, 6, 4, 8, 4, 7];
// const lowValue = 4;
// const highValue = 6;

// threeWayPartition(arr, lowValue, highValue);

// console.log(arr);
// Output: [3, 1, 2, 4, 4, 5, 6, 8, 7]

// let string = "sahil"

// console.log(string.substr(2,1));

// let name = "sahil tyagi is from a village called upeda"
// console.log(name.lastIndexOf('a'));

// function reverse(str){
// let changed = str.split(' ')

// let n = changed.length

// let left=0
// let right = n-1

// while(left<right){
//   let temp = changed[left]
//   changed[left] = changed[right]
//   changed[right] = temp

//   left++
//   right--
// }
// return changed.toString().replace(/,/g, " ");
// }

// let str = "hello i am a boy"
// console.log(reverse(str));

// let a = "acb"
// console.log(a.split('').sort().join(''))

// function selection(arr, n) {
//   if (n <= 1) return arr;

//   for (let i = 0; i < n - 1; i++) {
//     let min_index = i;

//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[min_index]) {
//         min_index = j;
//       }
//     }
//     if (min_index !== i) {
//       let temp = arr[i];
//       arr[i] = arr[min_index];
//       arr[min_index] = temp;
//     }
//   }

//   return arr;
// }

// function main() {
//   let arr = [2, 4, 1, 4, 6, 7, 8, 1];
//   let n = arr.length;

//   let result = selection(arr, n);
//   console.log(result);
// }

// main();

// function secondLargestAndSecondSmallest(arr,n){
//   let firstLargest = arr[0]
//   let secondLargest = -1

//   let firstSmallest = arr[0]
//   let secondSmallest = -1

// for(let i=1; i<n; i++){
//   if(arr[i]>firstLargest){
//     secondLargest = firstLargest
//     firstLargest = arr[i]
//   }else if(arr[i] > secondLargest && arr[i]!== firstLargest){
//     secondLargest=arr[i]
//   }

//   if(arr[i]<firstSmallest){
//     secondSmallest = firstSmallest
//     firstSmallest = arr[i]
//   }else if(arr[i]<secondSmallest && arr[i]!== firstSmallest){
//     secondSmallest = arr[i]
//   }

// }

//   return [secondLargest , secondSmallest]

// }

// let arr = [1,2,4,7,7,5]
// let n = arr.length

// let result = secondLargestAndSecondSmallest(arr,n)
// console.log(result);

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.left.left = new Node(40);
// root.left.right = new Node(50);

// function vertical(root){
//   if(root === null) return

//   const hashMap = new Map()
//   let queue = []
//   queue.push({node:root , hd:0})

//   while(queue.length > 0){
//     const{node , hd} = queue.shift()

//     if(!hashMap.has(hd)){
//       hashMap.set(hd , [])
//     }

//     hashMap.get(hd).push(node.data)

//     if(node.left!==null){
//       queue.push({node:node.left , hd:hd-1})
//     }

//     if(node.right!==null){
//       queue.push({node:node.right , hd:hd+1})
//     }
//   }

//   const cloneMap = new Map([...hashMap.entries()].sort((a,b)=>a[0]-b[0]))
//   return cloneMap
// }

// let result = vertical(root)
// console.log(result);

// function leadersInArray(arr ,n){
//   if(n<=1) return arr

//   let resultArray = []

//   for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//       if(arr[j] > arr[i]){
//         break
//       }
//       resultArray.push(arr[i])
//     }

//   }

//   return arr
// }

// function main(){
//   let arr = [4,7,1,0]
//   let n = arr.length

//   let answer = leadersInArray(arr , n)
//   console.log(answer);
// }

// main()

// function binary(arr,n,target){
//   if(n<=1) return arr

//   let low = 0
//   let high = n-1

//   while(low<=high){
//     let mid = Math.floor((low+high)/2)

//     if(arr[mid] === target){
//       return true
//     }else if(arr[mid] > target){
//       high = mid-1
//     }else{
//       low = mid+1
//     }
//   }
//   return false
// }

// function firstOccur(arr,n,target){

//   let ans =-1

//   let low = 0
//   let high = n-1

//   while(low<=high){
//     let mid = Math.floor((low+high)/2)

//     if(arr[mid]=== target){
//       ans = mid
//       high = mid-1
//     }else if(arr[mid] > target){
//       high = mid-1
//     }else{
//       low = mid+1
//     }
//   }

//   return ans
// }
// function lastOccur(arr,n,target){

//   let ans =-1

//   let low = 0
//   let high = n-1

//   while(low<=high){
//     let mid = Math.floor((low+high)/2)

//     if(arr[mid]=== target){
//       ans = mid
//       low = mid+1
//     }else if(arr[mid] > target){
//       high = mid-1
//     }else{
//       low = mid+1
//     }
//   }

//   return ans
// }

// function searchInRotatedSorted(arr,n,target){

//   let low = 0
//   let high = n-1

//   while(low<=high){
//     let mid = Math.floor((low+high)/2)

//     if(arr[mid] === target) return mid

//     if(arr[low] <= arr[mid]){
//       if(arr[low] <= target && target <= arr[mid]){
//         high = mid-1
//       }else{
//         low = mid+1
//       }
//     }else{
//       if(arr[mid] <= arr[high]){
//         if(arr[mid]<= target && target <= arr[high]){
//           low = mid+1
//         }else{
//           high = mid-1
//         }
//       }
//     }
//   }

//  return -1
// }

// function main(){
//   let arr = [4,5,6,1,2,3]
//   let n = arr.length
//   let target =1

//   let result = searchInRotatedSorted(arr,n, target)
//   console.log(result);
// }

// main()

// function longestConsecutive(arr , n){
//      if(n<=1) return 1

//      let map = new Map()

//      for(let i=0; i<n; i++){
//       map.set(arr[i] , 1)
//      }

//     let ans = -Infinity

//     for(let i=0; i<n; i++){
//       let count =1
//       if(map.has(arr[i]+1)){
//         count++

//         if(count > ans){
//           ans = count
//         }
//       }
//     }

//     return ans
// }

// function main(){
//   let arr = [100,4,200,1,2,3]
//   let n = arr.length
//   let result = longestConsecutive(arr,n)

//   console.log( result )
// }

// main()

// function times(arr,n){
//   if(n<=1) return arr

//   let low = 0
//   let high = n-1

//   let min = Infinity

//   while(low<=high){
//       let mid = Math.floor((low+high)/2)

//       if(arr[mid]<min){
//           min = arr[mid]
//       }

//       if(arr[mid] > arr[high]){
//           low = mid+1
//       }else{
//           high = mid-1
//       }
//   }
//   return arr.indexOf(min)
// }

// function single(arr,n){
//   if(n<=1) return arr

//   if(n%2==0) return -1

//   let low = 0
//   let high = n-1

//   while(low<=high){
//     let mid=  Math.floor((low+high)/2)

//     if ((mid === 0 && arr[mid+1]!==arr[mid] )|| (arr[mid]!==arr[mid-1] && arr[mid]!==arr[mid]+1) || (mid === n-1 && arr[mid-1]!==arr[mid]))

//     if(mid%2 !==0 && arr[mid]=== arr[mid-1]){
//       low = mid+1
//     }else{
//       high = mid-1
//     }
//   }
// }

// function threeSum(arr,n){
//   if(n<=2) return -1

//   let ans = new Set()

//   for(let i=0; i<n-2; i++){
//     for(let j=i+1; j<n-1; j++){
//       for(let k= j+1; k<n; k++){
//         let sum = arr[i] +arr[j] + arr[k]

//         let group = [arr[i] , arr[j] , arr[k]]

//         if(sum === 0){
//           group.sort((a,b)=>a-b)
//           ans.add(group)
//         }
//       }
//     }
//   }
// return ans
// }

// function container(arr, n) {
//   if (n <= 1) return 0;

//   let water = 0;

//   for(let i=0; i<n-1; i++){
//     for(let j=i+1; j<n; j++){
//       if(arr[i]<arr[j]){
//         let amount = arr[i] * (j-i)
//         water = Math.max(water , amount)
//       }else if(arr[i] >= arr[j]){
//         let amount = arr[j] * (j-i)
//         water = Math.max(water , amount)
//       }
//     }
//   }

//   return water

// }

// function bloom(arr,n,f,b){
//   let totalFlowers = f*b

//   if(totalFlowers > n) return -1

//   let ans = -Infinity

//   let low = Math.min(...arr)
//   let high = Math.max(...arr)

//   while(low<=high){
//     let mid = Math.floor((low+high)/2)

//     let check = ifPossible(arr,f,b,mid)

//     if(check){
//       ans = mid
//       high = mid-1
//     }else{
//       low = mid+1
//     }
//   }
//   return ans
// }

// function ifPossible(arr,f,b,day){
//   let n = arr.length

//   let count = 0
//   let boquet = 0

//   for(let i=0; i<mid; i++){
//     if(arr[i] <= day){
//       count++
//     }

//     if(count >=f){
//       boquet++
//       count = 0
//     }
//   }
// }

// function main() {
//   let arr = [7, 15, 6, 3];
//   let n = arr.length;
//   let h=8

//   let result = cooc(arr, n,h);
//   console.log(result);
// }

// main();

// let str = "sahil"
// str = str.split('').reverse().join('')

// console.log(str);

// function main(){
//   let arr = [1,2,3,4,5,6,7]
//   let target = 4

//   let result = linear()
// }

function buySell(arr, n) {
  let currentDay = 0;
  let currentBuyPrice = arr[0];
  let maxProfit = 0;
  let resultArr = [];

  for (let i = 1; i < n; i++) {
    if (arr[i] > currentBuyPrice) {
      maxProfit = Math.max(maxProfit, arr[i] - currentBuyPrice);
    } else if (arr[i] < currentBuyPrice) {
      currentBuyPrice = arr[i];
      if (i - 1 === currentDay) {
        continue;
      } else {
        resultArr.push([currentDay, i - 1]);
        currentDay = i;
      }
    }
  }
  if (currentDay < n - 1) {
    resultArr.push([currentDay, n - 1]);
  }
  return resultArr;
}

// function main(){
//   let arr =[100,180,260,310,40,535,695]
//   let n = arr.length

//   let result = buySell(arr,n)
//   console.log(result);
// }

// main()

// function subStr(str, n){
//   if(n<=1) return str

//   let resultArr = []

//   for(let i=0; i<n; i++){
//     for(let j=i+1; j<n+1; j++){
//       let string = ''
//       for(k=i; k<j; k++){
//         string += str[k]
//       }
//       resultArr.push(string)
//     }
//   }
//   return resultArr
// }

// function main(){
//   let str = 'abcd'
//   let result = printAllSubsequences(str)
//   console.log(result);
// }

// main()

// function printAllSubsequences(str, current = '', index = 0) {
//   if (index === str.length) {
//       console.log(current);
//       return;
//   }

//   printAllSubsequences(str, current + str[index], index + 1);

//   printAllSubsequences(str, current, index + 1);
// }

// let str1 ="1"
// let str2 = "33"

// if(str1>str2){
//   console.log('1');
// }else{
//   console.log('3');
// }

// function sumSubarray(arr,n,sum){

//   if(n===0) return -1

//   for(let i=0; i<n-1; i++){
//     let currentSum = arr[i]
//     if(arr[i] === sum) return [i]
//     for(let j=i+1; j<n; j++){
//       currentSum += arr[j]
//       if(currentSum === sum){
//         return [i+1, j+1]
//       }
//     }
//   }
//   return -1
// }

// function optimal(arr,n,sum){
//   if(n===0) return -1

//   let left = 0
//   let right = 1

//   let currentSum = arr[0]
//   if(currentSum ===  sum) return[1]

//   while(right<n || left<n){
//     if(currentSum < sum){
//       currentSum += arr[right]
//       right++
//     }else if(currentSum > sum){
//       currentSum -= arr[left]
//       left++
//     }else{
//       return [left+1 , right]
//     }
//   }

// return -1
// }

// function main(){
//   let arr = [1,2,3,4,5,6,7,8,9,10]
//   let n =arr.length
//   let sum = 15

//   let result = optimal(arr,n, sum)
//   console.log(result);
// }

// main()

// function ques(arr,n){
//   if(n===0) return []

//   let left = 0
//   let right = n-1

//   arr = arr.sort((a,b)=>a-b)
//   let temp = []

//   while(left<=right){
//     temp.push(arr[right])
//     right--
//     temp.push(arr[left])
//     left++
//   }
//   return temp
// }

// function main(){
//   let arr= [1,2,3,4,5,6]
//   let n = arr.length

//   let result = ques(arr,n)
//   console.log(result);
// }
// main()

// function tap(arr, n) {
//   if (n === 0) return 0;

//   let totalWater = 0;

//   for (let i = 0; i < n; i++) {
//     let leftMax = 0;
//     let rightMax = 0;

//     let j = i;
//     while (j >= 0) {
//       leftMax = Math.max(leftMax, arr[j]);
//       j--;
//     }

//     j = i;
//     while (j < n) {
//       rightMax = Math.max(rightMax, arr[j]);
//       j++;
//     }

//     totalWater += Math.min(leftMax, rightMax) - arr[i];
//   }

//   return totalWater;
// }

// function better(arr,n){
// if(n<=1) return 0

// let totalWater = 0

// let leftMax = new Array(n)
// let rightMax = new Array(n)

// leftMax[0] = arr[0]
// for(let i=1; i<n; i++){
//   leftMax[i] = Math.max(arr[i] , leftMax[i-1])
// }

// rightMax[n-1] = arr[n-1]
// for(let i=n-2; i>=0; i--){
//   rightMax[i] = Math.max(arr[i] , rightMax[i+1])
// }

// for(let i=1; i<n; i++){
//   totalWater += Math.min(leftMax[i], rightMax[i])- arr[i]
// }
// return totalWater
// }

// function check(arr,n){
//   if(n<=1) return arr

//   let sum = 0

//   for(let i=0; i<n; i++){
//     let currentMin = arr[i]
//     for(let j=i; j<n; j++){
//       currentMin = Math.min(currentMin , arr[j])
//       sum += currentMin
//     }

//   }

//   return sum
// }

// function main() {
//   let arr = [3,1,2,4];
//   let n = arr.length;

//   let result = check(arr, n);
//   console.log(result);
// }
// main();

// console.log(Math.sign(10));

// console.log(2/5);

// let arr = [4,1,2]

// let sortedArr = arr.sort((a,b)=>a-b)

// console.log(arr);
// console.log(sortedArr);

// let str = 'amazon'
// let str2 = 'azonam'

// let newStr = str + str
// let part = newStr.slice(2,str2.length+2)
// console.log(part);


