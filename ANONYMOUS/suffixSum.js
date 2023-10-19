let arr = [10,20,30,40,50]
let n = arr.length

let suffix = new Array(5).fill(0)

suffix[n-1] = arr[n-1]

for(let i=n-2; i>=0; i--){
    suffix[i] = suffix[i+1] + arr[i]
    
}

console.log(suffix);