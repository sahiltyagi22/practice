// Given string num representing a non-negative integer num, and an integer k, 
// return the smallest possible integer after removing k digits from num.

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.


function removeKdigits(s,k){
    let n = s.length 

    if(k>=n) return 0 

    let stack = []

    for(let i=0; i<n; i++){

        while(stack.length >0 && stack[stack.length-1] > s[i] && k>0){
            stack.pop()
            k--
        }

        stack.push(s[i])
    }

    while(k>0){
        stack.pop()
        k--
    }
    let result = stack.join('').replace(/^0+/, '');

    if (result === '') return "0";

    return result;

}


function main(){
    let str = '9101'
    let k =1

    let result = removeKdigits(str,k)
    console.log(result);
}

main()

 