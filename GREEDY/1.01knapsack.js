// You are given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. 
// Note that we have only one quantity of each item.
// In other words, given two integer arrays val[0..N-1] and wt[0..N-1] which represent values and weights associated with N items respectively. 
// Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[]
//  such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or dont pick it (0-1 property).



function brute(profit, weight , n, k){

    if(k===0) return 0 

    let totalprofit = 0
    let perKgProfit = []

    for(let i=0; i<n; i++){
        let perkg = profit[i] / weight[i]

        perkg = Math.floor(perkg * 10) / 10;

        perKgProfit.push([perkg , i])
    }
  
    perKgProfit.sort((a,b)=>b[0]-a[0])

    let fractionOfItem = new Array(n).fill(0)

    for(let i=0; i<n; i++){
        let itemIndex = perKgProfit[i][1]
        
        let weightOnIndex = weight[itemIndex]

        if(weightOnIndex <= k){
            fractionOfItem[itemIndex] = 1
            k -=  weightOnIndex
        }
    }
    
    for(let i=0; i<n; i++){
        totalprofit += fractionOfItem[i] * profit[i]
    }
    return totalprofit
}

function main(){
    let weight = [2,3,5,7,1,4,1]
    let profit = [10,5,15,7,6,18,3]
    let n  = profit.length 
    let k = 15

    let result =  brute(profit, weight, n, k)
    console.log(result);

}

main()