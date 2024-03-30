// sort the matrix


function sortMatrix(matrix){
    let n = matrix.length 

    let temp = []
    let k = 0

    for(let i=0; i<n; i++){
       for( let j=0; j<n; j++){
        temp[k++] = matrix[i][j]
       }
    }

    temp.sort((a,b)=>a-b)

    k=0
    for(let i=0; i<n; i++){
        for( let j=0; j<n; j++){
            matrix[i][j] = temp[k++]
        }
     }

     return matrix
}

function main(){
    let matrix = [[5,4,7] , [1,3,8] ,[2,9,6]]
    let result = sortMatrix(matrix)

    console.log(result);
}

main()