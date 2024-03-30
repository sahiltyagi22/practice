

function minimum(arr,n){
    if(n<=1) return arr

    let low = 0
    let high = n-1 

    let min = Infinity

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid]<min){
            min = mid
        }
        

        if(arr[mid] > arr[high]){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return min
}

function main(){
    let arr = [4,5,6,7,0,1,2,3]
    let n = arr.length 
    
    let result = minimum(arr,n)
    console.log(result);
}

main()