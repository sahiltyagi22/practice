// A B C D E
// A B C D
// A B C
// A B
// A

function pattern15(n){
    for(let i=n-1; i>=0; i--){
        let row = " "
        for(let j = 65 ; j<= 65 +i; j++){
            row += String.fromCharCode(j)
            
        }
        console.log(row);
    }
}

pattern15(5)