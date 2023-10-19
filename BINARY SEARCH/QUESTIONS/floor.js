function floor(arr,n,x){
    let low =0
    let high =  n-1

    let ans =-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid]<=x){
            ans = arr[mid]
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return ans
}

let arr = [1,2,4,5]
let n = arr.length
let x =3

console.log(floor(arr,n,x));