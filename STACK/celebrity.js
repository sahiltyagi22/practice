// A celebrity is a person who is known to all but does not know anyone at a party.
// If you go to a party of N people, find if there is a celebrity in the party or not.
// A square NxN matrix M[][] is used to represent people at the party such that if an element of row i and column j  is set to 1 it means ith person knows jth person.
//  Here M[i][i] will always be 0.
// Return the index of the celebrity, if there is no celebrity return -1.
// Note: Follow 0 based indexing.
// Follow Up: Can you optimize it to O(N)

function brute(mat, n) {
  let celeb = -1;

  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        flag = false;
      }
    }

    if (flag) {
      celeb = i;
    }
  }

  if (celeb > 1) return 0;

  let count = 0

  for (let i = 0; i < n; i++) {
    if (i === celeb) continue;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1 && j === celeb) {
        count++
      }
    }
  }
  if(count === n-1){
    return 1
  }

  return 0
}

function main() {
  let mat = [
    [0, 1],
    [1, 0]
  ];
  let n = mat.length;

  let result = brute(mat, n);
  console.log(result);
}
main();
