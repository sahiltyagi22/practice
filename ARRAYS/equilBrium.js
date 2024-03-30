// equilbrium point is the index in an array where the leftsum === rightsum 
//  ex - [1,3,5,2,2] here at index 2 is the equilbrium point 


function equi(arr,n){
    
    let leftSum = 0
    let totalSum = arr.reduce((acc,value)=> acc+value ,0)

    for(let i=0; i<n; i++){
        let rightSum = totalSum-leftSum-arr[i]

        if(rightSum === leftSum){
            return i+1
        }

        leftSum += arr[i]
    }

    return -1
}



function main(){
    let arr = [1,3,5,2,2]
    let n = arr.length 

    let result = equi(arr,n)
    console.log(result);
}

main()