let matrix = [[1, 2, 3, 4], [5, 6, 7, 8],[9, 10, 11, 12]];

// search an element in a matrix

let element  = matrix[0][2]
console.log(element);


// using loop


function traverse(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let s = "";
        for (let j = 0; j < matrix[i].length; j++) {
            s += matrix[i][j] + " "
        }
        console.log(s);
    }
}


traverse(matrix)