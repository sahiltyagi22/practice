// remove duplicates from a string


function removeDuplicate(str,n){
    if(n===0) return str 

    let set = new Set()

    for(let i=0; i<n; i++){
        set.add(str[i])
    }

    let array = Array.from(set)

    let result = array.join('')

    return result
}

function main(){
    let str = "geEksforGEeks"
    let n = str.length 

    let result = removeDuplicate(str,n)
    console.log(result);


}
main()