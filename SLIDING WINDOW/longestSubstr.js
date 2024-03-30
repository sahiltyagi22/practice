// find the longest substring in a string with distinct characters

function longest(str, n) {
  let maxLength = 1;

  for (let i = 0; i < n; i++) {
    let hashArray = new Array(256).fill(0);
    let length = 0;
    for (let j = i; j < n; j++) {
      let charCode = str[j].charCodeAt();
      if (hashArray[charCode]) {
        break;
      } else {
        hashArray[charCode] = 1;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
}

// better appraoch O(2*n)

function better(str, n) {
  if (n === 0) return 0;

  let left = 0;
  let right = 0;

  let maxLength = 1;

  let set = new Set();

  while (right < n) {
    let char = str[right];
    while (left < right && set.has(char)) {
      set.delete(char);
      left++;
    }
    set.add(char);
    maxLength = Math.max(maxLength, right - left + 1);

    right++;
  }

  return maxLength;
}


// optimal approach O(n)

function optimal(str,n){

    if(n===0) return 0 

    let maxLength = 0

    let map = new Map()

    for(let left=0, right=0; right<n; right++){
        let char = str[right]
        if(map.has(char)){
            left = Math.max(left , map.get(char)+1)
        }
        map.set(char, right)
        maxLength = Math.max(maxLength , right-left+1)
    }

    return maxLength

}

function main() {
  let string = "abcabcbb";
  let n = string.length;

  let result = optimal(string, n);
  console.log(result);
}

main();
