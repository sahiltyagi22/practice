// Given a Roman numeral, the task is to find its corresponding decimal value.
// Input: IX
// Output: 9

function checkFOrDecimal(r){
 if (r == 'I')
    return 1;
if (r == 'V')
    return 5;
if (r == 'X')
    return 10;
if (r == 'L')
    return 50;
if (r == 'C')
    return 100;
if (r == 'D')
    return 500;
if (r == 'M')
    return 1000;
return -1;
}




function romanToDecimal(str,n){
    if(n===0) return 0 

    let prevValue = -1
    let sum = 0

    for(let i=n-1; i>=0; i--){
        let decimalValue = checkFOrDecimal(str[i])
       
        if(decimalValue  > prevValue){
            sum += decimalValue
            prevValue = decimalValue
        }else{
            sum -= decimalValue
            prevValue = decimalValue
        }
    }

    return sum
}

function main(){
    let str = "MCMIV"
    let n = str.length 

    let result = romanToDecimal(str ,n)
    console.log(result);
}

main()