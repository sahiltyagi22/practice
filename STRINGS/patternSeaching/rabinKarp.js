// rabin karp algo is somewhere similar to the naive approach and in the worts case it has same time complexity as naive approach
// but in rabin karp we save time in window matching by pre calculate the hash value of the pattern window and the text window

function rabinKarp(str, pat, q) {
    let d = 256;
  
    let n = str.length;
    let m = pat.length;
  
    let resultArr = [];
  
    let h = 1;
    for (let i = 1; i < m; i++) {
        h = (h * d) % q;
    }
  
    let s = 0;
    let p = 0;
  
    for (let i = 0; i < m; i++) {
        s = (s * d + str[i].charCodeAt()) % q;
        p = (p * d + pat[i].charCodeAt()) % q;
    }
  
    for (let i = 0; i <= n - m; i++) {
        if (s === p) {
            let j = 0;
            while (j < m && str[i + j] === pat[j]) {
                j++;
            }
            if (j === m) {
                resultArr.push(i);
            }
        }
  
        if (i < n - m) {
            s = (d * (s - h * str[i].charCodeAt()) + str[i + m].charCodeAt()) % q;
  
            if (s < 0) {
                s = s + q;
            }
        }
    }
    return resultArr;
}
  
function main() {
    let str = 'abdabcbabc';
    let pat = 'abc';
    let q = 97;
  
    let result = rabinKarp(str, pat, q);
    console.log(result);
}
  
main();
