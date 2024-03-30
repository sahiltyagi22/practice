// Two strings str1 and str2 are called isomorphic if there is a one-to-one mapping possible for every character of str1 to every character of str2.
//  And all occurrences of every character in ‘str1’ map to the same character in ‘str2’.


function isomorphic(str1, str2) {
    let n = str1.length;
    let m = str2.length;

    if (n !== m) {
        return false;
    }

    let map = new Map();
    let mappedValues = new Set(); 

    for (let i = 0; i < n; i++) {
        if (map.has(str1[i])) {
            if (map.get(str1[i]) !== str2[i]) { 
                return false;
            }
        } else {
            if (mappedValues.has(str2[i])) { 
                return false;
            }
            map.set(str1[i], str2[i]);
            mappedValues.add(str2[i]);
        }
    }
    return true;
}

function main(){
    let str1 = 'aab'
    let str2 = 'xxy'
    
    let result = isomorphic(str1 , str2)

    console.log(result);
}

main()