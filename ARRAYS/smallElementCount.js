var countSmaller = function(nums) {
    let n = nums.length
    
    let temp = []

    for(let i=0; i<n; i++){
        temp.push(-1)
    }

    for(let i=0; i<n; i++){
        let count = 0
        for(let j=i+1; j<n; j++){
            if(nums[j] < nums[i]){
                count++
            }
        }
        console.log(count);
        if(count!==0){
            temp[i] = count
        }
    }
    return temp
};

function main(){
    let arr = [5,2,6,1]
    let result = countSmaller(arr)

    console.log(result);
}

main()