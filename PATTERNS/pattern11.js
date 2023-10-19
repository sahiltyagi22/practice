// *
// **
// ***
// ****
// *****
// *****
// ****
// ***
// **
// *


function pattern11(n){
   
    for(let i=0; i<n; i++){
        let row =""
        for(let j=0; j<=i; j++){
            row += '* '
        }
        
        console.log(row);
    }

    for(let i=n-2; i>=0; i--){
        let row =""
        for(let j=0; j<=i; j++){
            row += '* '
        }
        
        console.log(row);
    }
    
}
(pattern11(5));