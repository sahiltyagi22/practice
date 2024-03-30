// we have to fidn the longest subarrays that has even and odd or odd and even 
// in alternative order 



function oddEven(arr,n){
    if(n===0) return 0
    if(n===1) return 1 

    let currentCheck;
    let nextCheck;

    let finalLength =1


    let length = 1

    for(let i=0; i<n-1; i++){
        if(arr[i]%2==0){
            currentCheck = "even"
        }else{
            currentCheck = 'odd'
        }

        if(arr[i+1]%2==0){
            nextCheck = "even"
        }else{
            nextCheck = "odd"
        }

        if(currentCheck!==nextCheck){
            length += 1
            finalLength = Math.max(finalLength , length)
        }else{
            length =1
        }
    }
    return finalLength
}

function main(){
    let arr = [74 ,80, 8,13,37,49,20,6]
    let n = arr.length 

    let result = oddEven(arr,n)
    console.log(result);
}

main()