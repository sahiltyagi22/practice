// 54321
// 5432
// 543
// 54
// 5


function pattern6(n){
    let rows = n

    for(let i=1; i<=n; i++){
        let row =  " "
        for(let j=n; j>=i; j--){
            row += j + " "
        }
        console.log(row);
    }
}
pattern6(5)