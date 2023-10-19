//  check if the given string is subsequence of a string

function isSubSequence(A, B) {
  A = A.toLowerCase();
  B = B.toLowerCase();

  let bIndex = 0;

  for (let aChar of A) {
    while (bIndex < B.length && B[bIndex] !== aChar) {
      bIndex++;
    }

    if (bIndex === B.length) {
      return false;
    }

    bIndex++;
  }

  return true;
}

let A = "abcbc";
let B = "abcxyzb";

console.log(isSubSequence(A, B));
