// // Given a string s consisting only of characters a, b and c.

// // Return the number of substrings containing at least one occurrence of all these characters a, b and c.


// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are
//  "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 


// brute approach 
function brute(str,n){
    if(n<=2) return 0 

    let totolSubstr = 0 

    for(let i=0; i<n; i++){
        let map = new Map()
        for(let j=i; j<n; j++){
            if(map.has(str[j])){
                map.set(str[j] , map.get(str[j]) +1)
            }else{
                map.set(str[j] , 1)
            }

            if(checkFrequency(map)){
                totolSubstr++
            }
        }
    }


    return totolSubstr
}

function checkFrequency(frequencyMap) {
    // Check if map contains keys 'a', 'b', and 'c' with frequency >= 1
    return frequencyMap.has('a') && frequencyMap.get('a') >= 1 &&
           frequencyMap.has('b') && frequencyMap.get('b') >= 1 &&
           frequencyMap.has('c') && frequencyMap.get('c') >= 1;
}


function main(){
    let str = 'abc'
    let n = str.length 

    let result = brute(str,n)
    console.log(result);
}
main()