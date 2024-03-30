// we need to find an element in a 2D matrix where the elements are sorted row wise as well as column wise.

function binary(matrix, target){
    
    let rows = matrix.length
    let cols = matrix[0].length 

    let rowIndex = 0
    let colIndex = cols-1 

    while(rowIndex < rows && colIndex >=0){
        let element = matrix[rowIndex][colIndex]

        if(element === target){
            return true
        }else if(element < target){
            ++rowIndex
        }else{
            colIndex--
        }
    }
    return false
}


function main(){
    let matrix = [[1,2,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
    let target = 199

    let result = binary(matrix , target)
    console.log(result);
}

main()