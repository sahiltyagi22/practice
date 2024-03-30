


function linearSearch(matrix,target){
    let n = matrix.length 

    if(n===0) return -1
    

    for(let row =0; row<n; row++){
        for(let column=0; column < matrix[row].length; column++){
            if(matrix[row][column]=== target){
                console.log(row,column);
            }
        }
    }
}

function main(){
    let matrix = [[1,2,3,], [4,5,6],[7,8,9]]
    let target = 5

    let result = linearSearch(matrix,target)
}

main()