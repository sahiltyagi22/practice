// rotate a matrix by 90 degrees

// for rotation of matrix to 90 degress we need to find the transpose and then reverse the columns of the transpose matrix

function transpose(matrix, n) {
    if (n === 0) return matrix;

    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) { 
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}

function reverseColumns(matrix) {
    let n = matrix.length;
    let columnLength = matrix[0].length;

    for (let i = 0; i < columnLength; i++) { 
        let k = n - 1;
        for (let j = 0; j < n / 2; j++) { 
            let temp = matrix[j][i];
            matrix[j][i] = matrix[k][i];
            matrix[k][i] = temp;
            k--;
        }
    }
    return matrix;
}

function rotate90(){
    let matrix = [[1,2,3], [4,5,6], [7,8,9]] 
    let n = matrix.length 

    matrix = transpose(matrix,n)
    console.log(matrix);
    matrix = reverseColumns(matrix)

    console.log(matrix);
}
main()