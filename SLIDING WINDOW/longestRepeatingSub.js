// You are given a string s and an integer k.
// You can choose any character of the string and change it to any other uppercase English character.
//  You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4

// brute approach

function brute(str, n, k) {
  if (n === 0 || k === 0) return str;

  let longestSubString = 1;

  for (let i = 0; i < n ; i++) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (str[j] === str[i]) {
        count++;
        longestSubString = Math.max(longestSubString, count);
      } else{
        if (k >= 1) {
          count++;
          longestSubString = Math.max(longestSubString, count);
          k--;
        } else {
          break;
        }
      }
    }
  }
  return longestSubString;
}




// better solution O(n)

function better(str,n,k){
  let map = new Map()
    let start = 0
    let longestSubstring = 0 
    let maxCount = 0

    for(let end = 0, start = 0; end < n; end++) {
        let char = str[end]
        map.set(char, (map.get(char) || 0) + 1) 
        maxCount = Math.max(maxCount, map.get(char))

        if(end - start + 1 - maxCount > k) {
            let startChar = str[start]
            map.set(startChar, map.get(startChar) - 1)
            start++
        }

        longestSubstring = Math.max(longestSubstring, end - start + 1)
    }

    return longestSubstring
}

function main() {
  let str = 'ABAB';
  let n = str.length;
  let k = 2;

  let result = brute(str, n, k);
  console.log(result);
}
main();
