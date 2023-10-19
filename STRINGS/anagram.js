// Given two strings, check whether two strings are an anagram of each other.
//  Two strings are said to be an anagram of each other if they are just permutations of each other. 
//  That is, the set of characters in both the strings must be the same, only the order of characters can be different.


function anagram(S1 ,S2){
    let n1 = S1.length 
    let n2 = S2.length

    if(n1 !== n2) return false

    let totalChar = 256

    let count1 = Array(totalChar).fill(0)
    let count2 = Array(totalChar).fill(0)

    for(let i=0; i<n1 && i<n2; i++){
        count1[S1.charCodeAt(i)]++
        count2[S2.charCodeAt(i)]++
    }
for(let i=0; i<totalChar; i++){
    if(count1[i] !==count2[i]) return false
}
return true
}

let S1 = "cat"
let S2 = "act"

console.log(anagram(S1 , S2));