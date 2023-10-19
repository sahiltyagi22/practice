function KthMaxMin(arr,n){
  let max , min 

   arr = arr.sort(function(a,b){return b-a})

  max = arr[0+k-1]
  min = arr[n-k]
  console.log(arr);

  return [max , min]
}

let  arr = [1,2,4,5,3,6,7,9]
let n = arr.length
k =3

console.log(KthMaxMin(arr,n,k));