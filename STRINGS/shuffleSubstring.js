// Given strings str1 and str2. The task is to find if str1 is a substring in the shuffled form of str2 or not. 
// Print “YES” if str1 is a substring in shuffled form of str2 else print “NO”. 

function brute(pat, text) {
    let n = pat.length;
    let m = text.length;

   if (n> m ) return false

    let A = pat.split('').sort().join('');

    for (let i = 0; i <= m - n; i++) {
        let part = text.substr(i, n);
        // console.log(part);
        part = part.split('').sort().join(''); 

        if (part === A) return true;
    }
    return false;
}


function better(pat , text){
    let n = pat.length;
    let m = text.length;

   if (n> m ) return false
}









function main(){
    let pat  = 'onetwofour'
    let text = 'hellofourtwooneworld'

    let result = brute(pat , text)
    console.log(result);
}

main()