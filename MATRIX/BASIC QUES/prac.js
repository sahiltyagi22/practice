
function rotate180(matrix , n){

    let left = 0
    let right = n-1 

    while(left<right){
        [matrix[left] , matrix[right]] = [matrix[right] , matrix[left]]
        left++
        right--
    }
    

    for(let i=0; i<n; i++){
        matrix[i].reverse()
    }

    return matrix
}



function main(){
    let matrix = [[12,3,4] , [5,6,7,8], [9,10,11,12], [13,14,15,16]]
    let n = matrix.length 

    let result = rotate180(matrix,n)
    console.log(result);
}

main()