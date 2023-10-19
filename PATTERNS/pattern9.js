//  reverse Star Pyramid

function pattern8(n){
   

    for(let i =n; i>0; i--){
        let row = ' ';

        for(let j=0; j<n-i; j++){
            row += ' '
        }

        for(let k=0; k < 2*i-1; k++){
            row += "*"
        }
        console.log(row);
    }
}

pattern8(5)