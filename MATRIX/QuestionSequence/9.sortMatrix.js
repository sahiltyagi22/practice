// sort the matrix 

function sort(matrix){
    let faltMatrix = matrix.flat()

    faltMatrix.sort((a,b)=>a-b)
    return faltMatrix
}

function main(){
    let matrix = [[10,20,30,40],
    [15,25,35,45], 
    [27,29,37,48], 
    [32,33,39,50]]

    let result = sort(matrix)

    console.log(result);
}

main()
