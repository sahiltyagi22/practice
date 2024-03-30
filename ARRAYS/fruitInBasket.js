// You are visiting a farm that has a single row of fruit trees arranged from left to right.
//  The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right.
//  The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

 

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.


// brute force O(n*n)
function brute(fruits,n){
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    let maxFruits = 0;

    for (let i = 0; i < n - 1; i++) {
        let basket1 = fruits[i];
        let basket2 = null;
        let count = 1;

        for (let j = i + 1; j < n; j++) {
            if (fruits[j] === basket1 || fruits[j] === basket2) {
                count++;
            } else if (basket2 === null) {
                basket2 = fruits[j];
                count++;
            } else {
                break;
            }
        }

        maxFruits = Math.max(maxFruits, count);
    }

    return maxFruits;
}

// better approach O(n*n)
function better(arr,n){
    if(n===0) return 0
    if(n===1) return 1

    let totoalFruits= 0
    let map = new Map()
    let start = 0

    for(let end = 0; end<n; end++){
        let fruit = arr[end]

        if(map.has(fruit)){
            map.set(fruit , map.get(fruit)+1)
        }else{
            if(map.size===2){
                let [firstFruitIndex,secondFruitIndex] = map.values()
                let minValue =  Math.min(firstFruitIndex , secondFruitIndex)
                map.delete(arr[minValue])
                start++
            }
            map.set(fruit , end)
        }
        totoalFruits = Math.max(totoalFruits , (end-start)+1)
    }
    return totoalFruits
}

function main(){
    let arr = [1,2,3,4,5]
    let n = arr.length 

    let result = better(arr,n)
    console.log(result);
}

main()