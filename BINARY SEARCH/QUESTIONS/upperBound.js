function upper(arr, x){
    let low =0
    let high = arr.length-1
    let ans;
    while(low<=high){
        let mid = Math.floor((low+high) /2)

        if(arr[mid]>x){
            ans = mid
            high = mid-1
        }else{
            low = mid+1
        }
    }
    return ans
}

let arr = [1,2,3,4,5,6,7]
let x =3

console.log(upper(arr,x));