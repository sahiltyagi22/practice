
/**
 * brute force
 */

function divisors(n) {
  let row = "";
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      row += i + " ";
    }
  }
  return row;
}

console.log(divisors(24));

/**
 * Optimal solution
 */


function GCD(n){
    let row = ""
    let length = Math.floor(Math.sqrt(n))

    for(let i=0; i<=length; i++){
        if(n%i==0){
            row += i + " "
        

        if((n/i)!=i){
            row += n/i + " "
        }
    }
}

    return row
}

console.log(GCD(24));