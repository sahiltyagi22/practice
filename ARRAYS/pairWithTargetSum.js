// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.


function countPairs(arr,n,k){
    if(n===0) return 0 

    let count = 0
    let frequencyCounter = {}

    arr.forEach(element => {
        if (frequencyCounter[element]) {
            frequencyCounter[element]++;
        } else {
            frequencyCounter[element] = 1;
        }
    });
  

    for(let i=0; i<n; i++){
        let element = k-arr[i]

        if(getFrequency(frequencyCounter,element)){
            let frequency = getFrequency(frequencyCounter,arr[i])
            count += frequency-1
            reduceFrequency(frequencyCounter,arr[i])
        }
    }
    return count
}

function reduceFrequency(frequencyCounter,element) {
    if (frequencyCounter[element]) {
        frequencyCounter[element] -= 1;
        if (frequencyCounter[element] === 0) {
            delete frequencyCounter[element]; 
        }
    }
}

function getFrequency(frequencyCounter,element) {
    return frequencyCounter[element] || 0;
}

function main(){
    let arr = [1, 5, 5,5,5,7]
    let n = arr.length 
    let k =  10 

    let result = countPairs(arr,n,k)
    console.log(result);

}
main()