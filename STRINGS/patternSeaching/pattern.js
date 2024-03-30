// naive pattern search algo

function pattern(str, pat){
    let n  = str.length
    let m  = pat.length

    if(m>n) return -1

    let resultArr = []

    for(let i=0; i<n-m; i++){
        let j=0

        while(j<m && str[i+j]===pat[j]){
            j++
        }

        if(j===m){
            resultArr.push(i)
        }
    }
    return resultArr
}

function main(){
    let str = 'abccbadcba';
    let pat = 'bad'

    let result = pattern(str , pat)
    console.log(result);
}

main()