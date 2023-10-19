// A
// AB
// ABC
// ABCD
// ABCDE

function pattern15(n){
    for(let i=0; i<n; i++){
        let row = " "
        for(let j = 65 ; j<= 65 +i; j++){
            row += String.fromCharCode(j)
            
        }
        console.log(row);
    }
}

pattern15(5)