            //       A
            //      ABA
            //     ABCBA
            //    ABCDCBA


function pattern18(n){
    for(let i=0;i<n;i++){
        let row = ""
        let char = 65
        let space = (n-i-1)
        let breakPoint = Math.floor((2*i+1)/2)

        for(let k =0; k<space; k++){
            row += " "
        }

        for(let j=0; j<(2*i+1); j++){
            if(j< breakPoint){
                row += String.fromCharCode(char)
                char++
            }else{
                row += String.fromCharCode(char)
                char--
            }
            
          
        }
       

        for(let k =0; k<space; k++){
            row += " "
        }

        console.log(row);
    }

    
}     

(pattern18(5));