// Problem Statement: There is one meeting room in a firm. You are given two arrays, start and end each of size N.
// For an index ‘i’, start[i] denotes the starting time of the ith meeting while end[i]  will denote the ending time of the ith meeting. 
// Find the maximum number of meetings that can be accommodated if only one meeting can happen in the room at a  particular time. 
// Print the order in which these meetings will be performed.


function brute(start , end, n){
    if(n===0) return -1 

    let prevEnd = -1 
    let meetingCount = 0 

    let meetings = []
    for(let i =0; i<n; i++){
        meetings.push({ start: start[i], end: end[i] })
    }

    meetings.sort((a,b)=>a.end - b.end)

    for(let i=0; i<n; i++){
        if (meetings[i].start > prevEnd) {
            meetingCount += 1;
            prevEnd = meetings[i].end;
        }
    }
return meetingCount;
}

function main(){
    let start = [1,3,0,5,8,5]
    let end = [2,4,5,7,9,9]
    let n = start.length

    let result = brute(start, end, n)
    console.log(result);
}

main()