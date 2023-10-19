// A panagram contains all the letters of english alphabet at least once.

function panagram(str){
    str = str.toLowerCase()
    let b ='abcdefghijklmnopqrstuvwxyz'

    for(let achar of b){
        if(!str.includes(achar)) return false
    }

    return true
}

console.log(panagram('Thequickbrownfoxjumpsoverthelazydog'));


//  missing char in panagram

function missingPanagram(str){
    str = str.toLowerCase()
    let b ='abcdefghijklmnopqrstuvwxyz'
    let store = ""
    for(let achar of b){
        if(!str.includes(achar)) store+= achar
    }

    return store
}

console.log(missingPanagram('Thequckbrownfoxjumpsoverthelazydog'));