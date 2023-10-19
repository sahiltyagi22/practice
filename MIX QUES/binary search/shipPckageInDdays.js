// Problem Statement: You are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. The packages must be shipped within ‘d’ days.
// The weights of the packages are given in an array ‘of weights’. The packages are loaded on the conveyor belts every day in the same order as they appear in the array. The loaded weights must not exceed the maximum weight capacity of the ship.
// Find out the least-weight capacity so that you can ship all the packages within ‘d’ days.


// function brute(weight,d){
//     let n = weight.length
//     let min = Math.max(...weight)
//     let max = weight.reduce((acc, weight) => acc + weight, 0)

//     for(let i=min;  i<=max; i++){
//         if(days(weight,i)<=d){
//             return i
//         }
//     }
//     return -1
// }


// function days(weight,cap){
//     let load =0
//     let day =1

//     let n = weight.length
//     for(let i=0; i<n; i++){
//         if(load + weight[i] > cap){
//             day++
//             load = weight[i]
//         }else{
//             load += weight[i]
//         }
//     }
//     return day
// }

// let weight = [5,4,5,2,3,4,5,6]
// let day =5

// console.log(brute(weight,day));



/**
 * Binary
 */

function binary(arr, d) {
    let n = arr.length;

    let min = Math.max(...arr);
    let max = arr.reduce((acc, value) => acc + value, 0);

    let low = min;
    let high = max;
    let ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let numberOfDays = days(arr, mid);
        if (numberOfDays <= d) {
            high = mid-1
            ans = mid; // Update the answer
        } else {
            low = mid+1
        }
    }
    return ans;
}

function days(weight, cap) {
    let load = 0;
    let day = 1;

    let n = weight.length;
    for (let i = 0; i < n; i++) {
        if (load + weight[i] > cap) {
            day++;
            load = weight[i];
        } else {
            load += weight[i];
        }
    }
    return day;
}

let weight = [5, 4, 5, 2, 3, 4, 5, 6];
let day = 5;

console.log(binary(weight, day));
