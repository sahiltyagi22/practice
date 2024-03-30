// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. 
// You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

function brute(str,n,k){
    if(n===0) return 0 

    let longestSubstring = 0

    for(let i=0; i<n-1; i++){
        let currentLength = 1 

        for(let j=i+1; j<n; j++){
            if(str[j] === str[i]){
                currentLength += 1
                
                continue
            }

            if(str[j] !== str[i] && k>0){
                currentLength += 1
                k -= 1
                longestSubstring = Math.max(currentLength , longestSubstring)
            }else{
                longestSubstring = Math.max(currentLength , longestSubstring)
                break;
            }
        }
    }

    return longestSubstring
}


function main(){
    let str = 'AAABBB'
    let n = str.length 
    let k=3

    let result = brute(str,n,k)
    console.log(result);
}
main()