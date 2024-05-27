// binary search in a matrix

function binary(matrix, target){
    let rows = matrix.length 
    let columns = matrix[0].length


    let start = 0
    let end = rows*columns -1 

    while(start <=end){
        let mid = Math.floor((start +end)/2)

        let element = matrix[Math.floor(mid/columns)][mid%columns]

        if(element === target){
            return true
        }else if(element < target){
            start = mid+1
        }else{
            end = mid-1
        }
    }
    return false
}


function main(){
    let matrix = [[ ], [4,5,6], [7,8,9]]
    let target = 5

    let result = binary(matrix, target)
    console.log(result);
}

main()