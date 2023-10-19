//   *****
//   ****
//   ***
//   **
//   *

function pattern5(n){
    let rows = n

    for(let i=1; i<=n; i++){
        let row =  " "
        for(let j=n; j>=i; j--){
            row += "* "
        }
        console.log(row);
    }
}
pattern5(5)