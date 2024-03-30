// we need to find the unique elements in a matrix 
// we can use set data structure






function uniqueElements(matrix, n) {
    if (n === 0) return -1;

    let map = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j<n; j++) {
            if (map.has(matrix[i][j])) {
                map.set(matrix[i][j], map.get(matrix[i][j]) + 1);
            } else {
                map.set(matrix[i][j], 1);
            }
        }
    }

    let ans = []
    map.forEach((frequency,element)=>{
        if(frequency===1) ans.push(element)
    })

    return ans
}

   



function main(){
    let matrix =  [[1, 2, 3, 20], [5, 6, 20, 25], [1, 3, 5, 6], [6, 7, 8, 15]]
    let n = matrix.length 

    let result = uniqueElements(matrix,n)
    console.log(result);
}
main()