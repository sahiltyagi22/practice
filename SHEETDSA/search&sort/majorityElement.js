// Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times
//  (and hence there is at most one such element).

function brute(arr,n){
    
    for(let i=0; i<n-1; i++){
        let count =1
        for(let j=i+1; j<n; j++){
            if(arr[j]===arr[i]) count++
        }
        if(count > n/2) return arr[i]
    }
}



//  better approach
function better(arr, n) {
    let map = new Map();

    for (let i = 0; i < n; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1);
        }
    }

    for (let [element, count] of map) {
        if (count > n / 2) return element;
    }
}


// Optimal approach

function optimal(arr,n){

    let count = 0
    let element;

    for(let i=0; i<n; i++){
        if(count =0){
            count++
            element = arr[i]
        }else if(element = arr[i]){
            count++
        }else{
            count--
        }
    }


    let count1 = 0
    for(let i=0; i<n; i++){
        if(arr[i]===element) count++
    }

    if(count > n/2) return element
}




function main(){
    let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]
    let n  = arr.length 

    let result = optimal(arr,n)
    console.log(result);
}

main()