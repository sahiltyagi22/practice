//   *
//   * *
//   * * *
//   * * * *


function pattern2(n){
    let rows = n

    for(let i=0; i<rows; i++){
        let row = ""
        for(j=0; j<=i;  j++){
            row += "* "
        }
        console.log(row);
    }
}

pattern2(4)
