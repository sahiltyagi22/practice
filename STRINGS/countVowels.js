//  count distinct vowels in a word 

function vowels(str){
    let arr = ['a' ,'e' ,'i','o','u']

    str = str.split('')
    let res = new Set()
    for(let i=0; i<str.length; i++){
        if(arr.includes(str[i])){
            res.add(str[i])
        }
        
    }
    return res.length
}

 console.log(vowels("world"));