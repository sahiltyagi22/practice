// Given a string as an input. We need to write a program that will print all non-empty substrings of that given string.

function substrings(str, n) {
    if (n <= 1) return [str]; 

    let result = [];

    for (let i = 0; i < n; i++) {
        let subPart  =" "
        for (let j = i; j < n; j++) {
             subPart += str[j]
            result.push(subPart);
        }
    }
    return result;
}

let string = 'abcd';
let n = string.length;

let res = substrings(string, n);
console.log(res);
