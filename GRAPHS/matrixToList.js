const matrix = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
];


function toList(matrix){
    let list = {}

    for(let i = 0; i<matrix.length; i++){
        list[i] = []

        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j] === 1 && i!==j){
                list[i].push(j)
            }
        }
    }

    return list
}

let result = toList(matrix)
console.log(result);