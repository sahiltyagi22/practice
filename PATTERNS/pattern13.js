// 1      1
// 12    21
// 123  321
// 12344321


function pattern12(n){
    let space = 2*(n-1)
    for(let i =0; i<n; i++){
        let row = ""
        
        for(let j =1; j<=i; j++){
            row += j + " "
        }

        for(let j =1; j<=space; j++){
            row += "  "
        }
        
        for(let j =i; j>=1; j--){
            row += j + " "
        }
        space -= 2

        console.log(row);
    }

    
}

(pattern12(5));