// 1
// 123
// 1234
// 12345


function pattern3(n){
    let rows = n

    for(let i=1; i<=n; i++){
        let row =  " "
        for(let j=1; j<=i; j++){
            row += i  + " "
        }
        console.log(row);
    }
}
pattern3(5)