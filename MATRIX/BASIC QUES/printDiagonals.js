//  there are two types of diagonals in a matrix

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8],[9, 10, 11, 12],[13,14,15,16]];
let n = matrix.length
let m  = matrix[0].length


// 1) principal diagonal (11,22,33)
function principalDiagonals(matrix){
    let str = ""
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i===j){
                str += matrix[i][j] + " "
            }
        }
    }
    return str
}


// 2) secondary diagonals (goes rightmost to left most diagonal)
function secondaryDiagonals(matrix){
    let str = ""
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if((i+j) === n-1){
                str += matrix[i][j] + " "
            }
        }
    }
    return str
}




function main(){
    let result = secondaryDiagonals(matrix)
    console.log(result);
}

main()
