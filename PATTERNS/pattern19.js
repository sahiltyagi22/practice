//     A    
//    ABC   
//   ABCDE  
//  ABCDEFG 
// ABCDEFGHI


function pattern19(n){
    for(let i=0;i<n;i++){
        let row = ""
        let char = 65
        let space = (n-i-1)

        for(let k =0; k<space; k++){
            row += " "
        }

        for(let j=0; j<(2*i+1); j++){
            row += String.fromCharCode(char+j)
        }

        for(let k =0; k<space; k++){
            row += " "
        }

        console.log(row);
    }

    
}     

(pattern19(5));