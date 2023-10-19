// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15 


function pattern14(n){

    let num =1
    for(let i =1; i<=n; i++){
        let row = " "
        for(let j=1; j<=i; j++){
            row += num + " "
            num = num +1
        }
        console.log(row);
    }
}

pattern14(5)