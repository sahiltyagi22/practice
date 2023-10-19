// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *
// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *

function pattern21(n){
  space =0
  for(let i=0; i<n; i++){
    let row = ""
      for(let j=0; j<(n-i); j++){
        row += "* "
      }

      for(let k=0; k<space; k++){
        row += "  "
      }
      for(let j=0; j<(n-i); j++){
        row += "* "
      }

      
      space += 2

      console.log(row);
  }

  for(let i=0; i<n; i++){
    let row = ""
    let space = 8
    for(let j=0; j<=i; j++){
      row += "* "
    }
     for(let k =0; k<space; k++){
      row += "  "
      space -= 2
     }
   
    for(let j=0; j<=i; j++){
      row += "* "
    }

    
    
    console.log(row);
  }
}
  pattern21(5)