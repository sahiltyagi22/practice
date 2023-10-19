// Given an array of numbers, you need to return the count of reverse pairs.
//  Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

function brute(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > 2 * arr[j]) {
        count++;
      }
    }
  }
  return count;
}

let arr = [4, 1, 2, 3, 1];
console.log(brute(arr));


f