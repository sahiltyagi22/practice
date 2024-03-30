// Given a square matrix, the task is that turn it by 180 degrees in an anti-clockwise direction without using any extra space.

// Input :  1  2  3
//         4  5  6
//         7  8  9
// Output : 9 8 7 
//         6 5 4 
//         3 2 1


function rotateMatrix(matrix){
    let n = matrix.length 

    let flatMatrix = matrix.flat()

    flatMatrix.sort((a,b)=>a-b)
    let k=0
    

    for(let i=n-1; i>=0; i--){
      for(let j=n-1; j>=0; j--){
        matrix[i][j] = flatMatrix[k++]
    }
    }

    return matrix
}

function main(){
    let matrix = [[1,2,3] , [4,5,6] ,[7,8,9]]
    let result = rotateMatrix(matrix)

    console.log(result);
}

main()