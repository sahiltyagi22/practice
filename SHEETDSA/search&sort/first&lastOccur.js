// Given a sorted array arr[] with possibly duplicate elements, the task is to 
// find indexes of the first and last occurrences of an element x in the given array. 


// Brute force
function firstLastOccur(arr , x){
    let n = arr.length 

    let firstOccur = -1
    let lastOccur = -1

    for(let i=0; i<n; i++){
        if(arr[i] === x){
            if(firstOccur === -1){
                firstOccur = i
            }
            lastOccur = i
        }
    }
    return [firstOccur , lastOccur]
}



//  Better approach using binary search  when arr is sorted 

function occurrences(arr ,x){

    let n = arr.length
    let res =[]
    
}






function main(){
    let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125]
    let x =5
    
    let result = firstLastOccur(arr,x)
    console.log(result);
}

main()

