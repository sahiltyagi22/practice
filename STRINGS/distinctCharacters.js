// we have to find the longest substring that has distinct characters


function longestDistinctChar(str,n){
    if(n<=1) return n
    
    let maxLength = 0 

    for(let i=0; i<n; i++){
        let hashSet = new Set()
        let currentLength = 0
        for(let j=0; j<n; j++){
            if(hashSet.has(str[j])){
                break
            }else{
                hashSet.add(str[j])
                currentLength++
                maxLength = Math.max(currentLength , maxLength)
                
            }
        }
    }

    return maxLength
}

function main(){
    let str = 'abcdabc'
    let n = str.length 

    let result = longestDistinctChar(str ,n)
    console.log(result);
}

main()