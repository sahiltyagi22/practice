//       *
//      ***
//     *****
//    *******
//   *********
//  ***********

function pattern8(n){
   

    for(let i =0; i<n; i++){
        let row = ' ';

        for(let j=0; j<n-i-1; j++){
            row += ' '
        }

        for(let k=0; k < 2*i+1; k++){
            row += "*"
        }
        console.log(row);
    }
}

pattern8(5)

// function createStarPyramid(height) {
//     for (let i = 1; i <= height; i++) {
//       let row = '';
      
//       // Add spaces before stars
//       for (let j = 1; j <= height - i; j++) {
//         row += ' ';
//       }
      
//       // Add stars
//       for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//       }
      
//       console.log(row);
//     }
//   }
  
//   const pyramidHeight = 5; 
//   createStarPyramid(pyramidHeight);
  
  
