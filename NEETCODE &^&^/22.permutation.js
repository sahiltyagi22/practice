// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.


function brute(s1, s2) {
  let n = s1.length;
  let m = s2.length;

  if (n === 0 || m === 0) return false;

  if (n > m) return false;

  s1 = s1.split("").sort().join("");

  for (let i = 0; i < m - n; i++) {
    let subStr = "";
    for (let j = i; j < i + n; j++) {
      subStr += s2[j];
    }

    subStr = subStr.split("").sort().join("");

    if (subStr === s1) {
      return true;
    }
  }

  return false;
}


// better approach
function better(s1, s2) {
  let n = s1.length;
  let m = s2.length;

  if (n === 0 || m === 0) return false;

  if (n > m) return false;

  let hashArray1 = new Array(256).fill(0);
  let hashArray2 = new Array(256).fill(0);

  // Count the frequency of characters in s1
  for (let i = 0; i < n; i++) {
      hashArray1[s1[i].charCodeAt()]++;
  }

  // Initialize the sliding window
  for (let i = 0; i < n; i++) {
      hashArray2[s2[i].charCodeAt()]++;
  }

  // Slide the window through s2
  for (let i = n; i < m; i++) {
      if (arraysEqual(hashArray1, hashArray2)) {
          return true;
      }

      // Remove the leftmost character from the window
      hashArray2[s2[i - n].charCodeAt()]--;

      // Add the next character to the window
      hashArray2[s2[i].charCodeAt()]++;
  }

  // Check if the last window is a permutation of s1
  if (arraysEqual(hashArray1, hashArray2)) {
      return true;
  }

  return false;
  }
  

function main() {
  let s1 = "hello";
  let s2 = "ooolleoooleh";

  let result = better(s1, s2);
  console.log(result);
}

main();
