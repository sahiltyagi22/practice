let arr = new Array(6).fill(0);

let q = [
  [2, 4],
  [1, 3],
  [1, 2],
];

for(let i=0; i<q.length; i++){
    let l= q[i][0]
    let r = q[i][1]

    while(l<=r){
        arr[l] = arr[l] +100
        l++
    }
    console.log(arr);
}