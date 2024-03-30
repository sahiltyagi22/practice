

function greedy(greed , cookies , n,m){
    if(n===0 || m===0) return 0 

    cookies.sort((a,b)=>a-b)
    greed.sort((a,b)=>a-b)

    let totalContent = 0

    let i=0; 
    let j=0;

    while(i<n && j<m){
        if(cookies[j]>= greed[i]){
            totalContent +=  1
            i++
            j++
        }else{
            j++
        }
    }
    return totalContent
}

function main(){
    let greed = [1,2,3]
    let cookies = [1,1]

    let n = greed.length 
    let m = cookies.length 

    let result = greedy(greed , cookies , n, m)
    console.log(result);
}
main()