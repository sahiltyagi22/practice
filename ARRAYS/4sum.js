// Given an array of N integers, your task is to find unique quads that add up to give a target value. 
// In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.


/**
 * brute force  (tc = n4   sc = no of quads)
 */

function four(arr,target){
    let n = arr.length
    let set = new Set()

    for(let i=0; i<n-3; i++){
        for(let j = i+1; j<n-2; j++){
            for(let k=j+1; k<n-1; k++){
                for(let l = k+1; k<n; k++){
                    let sum = arr[i] + arr[j]
                    sum+= arr[k] + arr[l]

                    if(sum === target){
                        let temp = [arr[i] , arr[j] , arr[k] , arr[l]]
                        temp.sort((a,b) => a-b)
                        set.add(temp)
                    }
                }
            }
        }
    }
    let ans  = Array.from(set)
    return ans
}

// let arr = [1,0,-1,0,-2,2]
// let target = 0

// console.log(four(arr, target));

/**
 * better approach (using 3 loops)
 */


function better(arr,target){
    let n = arr.length
    let set = new Set()

    for(let i=0; i<n-2; i++){
        if(i>0 && arr[i] === arr[i-1]) continue
        for(let j=i+1; j<n-1; j++){
            if(j>i+1 && arr[j] === arr[j-1]) continue
            let hashSet = new Set()
            for(let k=j+1; k<n; k++){
                if(k>j+1 && arr[k]=== arr[k-1]) continue
                let sum  = arr[i] + arr[j] + arr[k]
                let fourth = target -sum

                if(hashSet.has(fourth)){
                    let temp = [arr[i] , arr[j] , arr[k] , fourth]
                    temp.sort((a,b) =>a-b)
                    set.add(temp)
                }
                hashSet.add(arr[k])
            }
        }
    }
    let ans = Array.from(set)
    return ans
}

// let arr = [1,0,-1,0,-2,2]
// let target = 1

// console.log(better(arr, target));


/**
 * optimal solution
 */

function optimal(arr,target){
    let n = arr.length
    arr.sort((a,b) => a-b)
    let ans = []

    for(let i=0; i<n-3; i++){
        if(i>0 && arr[i] === arr[i-1]) continue

        for(let j =i+1; j<n-2; j++){
            if(j>i && arr[j] === arr[j-1]) continue

            let k = j+1
            let l = n-1

            while(k<l){
                let sum = arr[i] + arr[j] 
                sum += arr[k] + arr[l]

                if(sum === target){
                    let temp = [arr[i] , arr[j] , arr[k] , arr[l]]
                    ans.push(temp)
                    k++
                    l--

                    while(k<l && arr[k] === arr[k-1]) k++
                    while(k<l && arr[l] === arr[l+1]) l--
                }else if(sum<target) k++
                else l--
            }
        }
    }
    return ans
    
}

let arr = [1,0,-1,0,-2,2]
let target = 0

console.log(optimal(arr, target));





  
  