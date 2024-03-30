// Given a binary string, that is it contains only 0s and 1s.
//  We need to make this string a sequence of alternate characters by flipping some of the bits, 
//  our goal is to minimize the number of bits to be flipped. 


function flip(char){
    return (char === '0') ? '1' : '0'
}


function flipsWithStartingChar(str , expected){
    let flipCount = 0
    for(let i=0; i<str.length; i++){
        if(str.charAt(i)!==expected){
            flipCount++
        }
        expected = flip(expected)
    }
    return flipCount
}



function main(str){
    return Math.min(flipsWithStartingChar(str, "0"),
                    flipsWithStartingChar(str ,"1")
                     )
}

let str = "0001010111"
let result = main(str)
console.log(result);