// Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.

//  we have have brute force approach and can use 2 for loops and if we find duplicate we can store the element and frequency

function brute(str, n) {
  if (str.length <= 1) return -1;

  let store = [];
  let visited = [];

  for (let i = 0; i < n - 1; i++) {
    if (visited.includes(str[i])) continue;
    let count = 1;
    let char = str[i];
    visited.push(str[i]);
    for (let j = i + 1; j < n; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count > 1) {
      store.push(char, count);
    }
  }

  return store;
}

//  better approach n*logN time
function better(str, n) {
  if (str.length <= 1) return -1;

  str = str.split("").sort().join("");

  let store = [];

  for (let i = 0; i < n - 1; i++) {
    let count = 1;
    while (i < n && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    if (count > 1) {
      store.push(str[i], count);
    }
  }

  return store;
}

// optimal approach O(N) using O(N) space

function optimal(str,n){
    if(n<=1) return -1

    let count = new Map()
    let result = []

    for(let i=0;i<n; i++){
        if(count.has(str[i])){
            count.set(str[i] , count.get(str[i])+1)
        }else{
            count.set(str[i] , 1)
        }
    }

    for(let[char,num] of count){
        if(num>1){
            result.push([char , num])
        }
    }
    return result
}
function main() {
  let str = "geeksforgeeks";
  let n = str.length;

  let result = optimal(str, n);
  console.log(result);
}
main();
