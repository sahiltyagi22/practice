// row-wise sum


function rowWiseSum(matrix, target) {
    let n = matrix.length;
  
    if (n === 0) return -1;
  
    let rowWiseSum = [];
  
    for (let row = 0; row < n; row++) {
      let sum = 0;
      for (let column = 0; column < matrix[row].length; column++) {
        sum += matrix[row][column];
      }
      rowWiseSum.push(sum);
    }
    return rowWiseSum
  }
  
  function main() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let target = 5;
  
    let result = rowWiseSum(matrix, target);
    console.log(result);
  }
  
  main();
  