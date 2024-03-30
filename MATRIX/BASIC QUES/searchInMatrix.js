//  searching an element in a matrix

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8],[9, 10, 11, 12]];

let x =100

// using loop


function traverse(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {
           if(x === matrix[i][j]){
            return true
           }
        }
    }
    return false
}


console.log(traverse(matrix))