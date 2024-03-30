// Given a String S of length N, two integers B and C, the task is to traverse characters starting from the beginning,
//  swapping a character with the character after C places from it, i.e. swap characters at position i and (i + C)%N. 
//  Repeat this process B times, advancing one position at a time. Your task is to find the final String after B swaps.

function  swap(str,b,c){
    let n = str.length 
 
    for(let i=0; i<b; i++){
    
    [str[(i)%n] , str[(i+c)%n]] = [str[(i+c)%n] , str[(i)%n]]
    }

    return str

}

let str = 'ABCDEFGH'
let b =4
let c =3
 let result = swap(str,3)
 console.log(result);
