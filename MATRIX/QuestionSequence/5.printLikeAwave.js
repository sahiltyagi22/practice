// we have to print matrix in a wave like manner

function waveLike(matrix){
    let n = matrix.length 

    if(n===0) return matrix

    for(let col= 0; col <n; col++){
        if(col%2 !==0){
            for(let row = n-1; row>=0; row--){
                console.log(matrix[row][col]);
            }
        }else{
            for(let row = 0; row<n; row++){
                console.log(matrix[row][col]);
            }
        }
    }
}

function main() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let target = 5;
  
    let result = waveLike(matrix, target);
  }

  main()