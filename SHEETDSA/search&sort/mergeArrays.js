// We are given two sorted arrays. We need to merge these two arrays such that
//  the initial numbers (after complete sorting) are in the first array and the remaining numbers are in the second array


function merge(arr1 , arr2,n,m){
    let i =0
    let j=n-1 

    while(i<m && j>=0){
        if(arr2[i]<arr1[j]){
           [ arr2[i] , arr1[j]] =  [arr1[j] , arr2[i]]
        }
        i++
        j--
    }
    return [arr1.sort() , arr2.sort()]
}



function better(arr1, arr2, n, m) {
    let i = 0;
    let j = 0;

    while (i < m && j < n) {
        if (arr2[i] < arr1[j]) {
            // Swap elements and move arr2[i] to its correct position
            [arr2[i], arr1[j]] = [arr1[j], arr2[i]];

            // Move arr1[j] to its correct position in the sorted arr1
            let temp = arr1[j];
            let k = j + 1;
            while (k < n && temp > arr1[k]) {
                arr1[k - 1] = arr1[k];
                k++;
            }
            arr1[k - 1] = temp;
        }
        j++; // Increment j after processing the current element in arr1
        i++;
    }
    return [arr1 , arr2]
}


function main(){
let arr1 = [1, 5, 9, 10, 15, 20]
let arr2  = [2, 3, 8, 13]
let n = arr1.length 
let m  = arr2.length 

let result = better(arr1,arr2,n,m)
console.log(result);
}

main()