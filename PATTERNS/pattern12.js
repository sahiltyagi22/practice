// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


function pattern11(n){
    let start = 1;
    for(let i=0; i<n; i++){
        let row = ""
        if (i%2==0){start =1}
        else(start =0)
        for(let j =0; j<=i; j++){
            row += start
            start = 1-start
        }
        console.log(row);
    }
}

pattern11(5)