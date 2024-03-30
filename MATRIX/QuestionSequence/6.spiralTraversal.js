// we need to spirally traverse the matrix 

function spiral(matrix) {
    let rows = matrix.length;
    if (rows === 0) return [];
    let columns = matrix[0].length;

    let ans = [];

    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = columns - 1;

    let count = 0;
    let total = rows * columns;

    while (count < total) {
        // Traverse start row from left to right
        for (let index = startCol; index <= endCol && count < total; index++) {
            ans.push(matrix[startRow][index]);
            count++;
        }
        startRow++;

        // Traverse end column from top to bottom
        for (let index = startRow; index <= endRow && count < total; index++) {
            ans.push(matrix[index][endCol]);
            count++;
        }
        endCol--;

        // Traverse end row from right to left
        for (let index = endCol; index >= startCol && count < total; index--) {
            ans.push(matrix[endRow][index]);
            count++;
        }
        endRow--;

        // Traverse start column from bottom to top
        for (let index = endRow; index >= startRow && count < total; index--) {
            ans.push(matrix[index][startCol]);
            count++;
        }
        startCol++;
    }

    return ans;
}

function main() {
    let matrix = [[1,2,3], [4,5,6], [7,8,9]];
    
    let result = spiral(matrix);
    console.log(result);
}

main();
