// A
// BB
// CCC
// DDDD
// EEEEE


function patter17(n){
    for(let i =0; i<n; i++){
        let char = 65 + i
        let row = " "
        for(let j=0; j<=i;j++ ){
            row  += String.fromCharCode(char)
        }
        console.log(row);
    }
}

patter17(5)