// 12345
// 1234
// 123
// 12
// 1




function pattern7(n){
    let rows = n

    for(let i=n; i>=1; i--){
        let row =  " "
        for(let j=1; j<=i; j++){
            row += j + " "
        }
        console.log(row);
    }
}
pattern7(5)