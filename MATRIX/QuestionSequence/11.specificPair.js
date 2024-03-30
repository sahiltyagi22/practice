// Given an n x n matrix mat[n][n] of integers,
//  find the maximum value of mat(c, d) – mat(a, b) over all choices of indexes such that both c > a and d > b.

// brute force (N*N*N*N)

function pair(matrix, n) {
  if (n === 0) return -1;

  let maxSum = -Infinity;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      for (let k = i + 1; k < n; k++) {
        for (let l = j + 1; l < n; l++) {
          if (matrix[k][l] - matrix[i][j]> maxSum) {
            maxSum = matrix[k][l] - matrix[i][j];
          }
        }
      }
    }
  }
  return maxSum
}

function main() {
  let matrix = [
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 6, 1, 3],
    [-4, -1, 1, 7, -6],
    [0, -4, 10, -5, 1],
  ];

  let n = matrix.length 

  let result = pair(matrix , n)
  console.log(result);
}

main()
