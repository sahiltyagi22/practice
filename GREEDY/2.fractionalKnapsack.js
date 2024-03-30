// same as 0-1 knapsack but here we can take the fraction of n item also 

const { trusted } = require("mongoose");

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
        }else if(k>0){
            fractionOfItem[itemIndex] = k/weightOnIndex
            k=0
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