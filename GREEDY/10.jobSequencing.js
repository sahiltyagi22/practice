// Given a set of N jobs where each jobi has a deadline and profit associated with it.

// Each job takes 1 unit of time to complete and only one job can be scheduled at a time.
//  We earn the profit associated with job if and only if the job is completed by its deadline.

// Find the number of jobs done and the maximum profit.

// Note: Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job.
//  Deadline of the job is the time before which job needs to be completed to earn the profit.


function brute(arr,n){
    if(n===0) return [0,0]

    arr.sort((a,b)=>b[2]- a[2])

    let maxDeadline = -1 
    let maxProfit = 0

    for(let i=0;i<n; i++){
        if(arr[i][1] > maxDeadline){
            maxDeadline = arr[i][1]
        }
    }
    console.log(maxDeadline);
    const slotsArray = new Array(BigInt(maxDeadline)).fill(false)

    for(let i=0; i<n; i++){
        for(let j= Math.min(maxDeadline, arr[i][1])-1; j>=0; j--){
            if(!slotsArray[j]){
                slotsArray[j] = true 
                maxProfit += arr[i][2]
                break;
            }
        }
    }
let totalJobs = 0 

for(let i=0; i<slotsArray.length; i++){
    if(slotsArray[i]){
        totalJobs += 1
    }
}

return [totalJobs , maxProfit]
    
}

function main(){
    let arr = [[1,2,100],[2,1,19],[3,2,27],[4,1,25],[5,1,15]]
    let n = arr.length 

    let result = brute(arr,n)
    console.log(result);

}
main()