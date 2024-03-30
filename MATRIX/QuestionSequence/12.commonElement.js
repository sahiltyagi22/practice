// we need to find the common element that is present in all rows of a matrix 


// brute force (N*M*M)
// in this approach we are gonna check for each element either present in all rows or not  



// Better approach O(N*M)  space-O(N)

function common(matrix){
    let n = matrix.length 

    let ans=  []

    let row = n
    let col = matrix[0].length

    let map = new Map()

    // setting up available elements in the first row
    for(let i=0; i<col; i++){
        map.set(matrix[0][i] , 1)
    }

    // checking common elements in the remaining rows
    for(let i=1; i<row; i++){
        for(let j=0; j<col; j++){
            if (map.get(matrix[i][j]) != null && map.get(matrix[i][j]) == i) 
            { 
                map.set(matrix[i][j], i + 1); 
                if (i == row - 1) {
                    ans.push(matrix[i][j])
                }
                    
        }
    }
}
return ans
}

function main(){
    let matrix = [[1, 2, 1, 4, 8],
        [3, 7, 8, 5, 1],
        [8, 7, 7, 3, 1],
        [8, 1, 2, 7, 9]]

    let result = common(matrix)
    console.log(result);
}

main()