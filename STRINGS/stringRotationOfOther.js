// Given a string s1 and a string s2, write a function to check whether s2 is a rotation of s1. 


//  Naive approach

function helper(s1,s2,index,size){
    
    for(let i=0; i<size; i++){
        if(s1[i]!== s2[(index+i)%size]) return false
    }
    return true
}

function checkString(s1,s2){
    let size  = s1.length 
    let size1 = s2.length 

    if(size!==size1) return false

    let indexes = []
    let firstChar = s1[0]

    for(let i=0; i<size; i++){
        if(s2[i] === firstChar){
            indexes.push(i)
        }
    }

    let rotated = false

    for(let index of indexes){
        rotated = helper(s1,s2,index , size)

        if(rotated) break
    }

    if(rotated){
        return true
    }else{
        return false
    }
}


//  better approach using queue ds

function check(s1,s2){
    let size  = s1.length 
    let size1 = s2.length 

    if(size!==size1) return false

    let queue = []

    for(let i=0; i<size; i++){
        queue.push(s1[i])
    }

   
    for(let i=0; i<size; i++){
        let char = queue.shift()
        queue.push(char)

        if(queue.join('') === s2) return true
    }
    return false
}



// optimal approach -  concat s1 with itself and check if s2 is substring of that concat string 

function optimal(s1,s2){
    let size  = s1.length 
    let size1 = s2.length 

    if(size!==size1) return false

    let temp = s1+s1

    return temp.includes(s2)
}





function main(){
    let s1 = 'abcd'
    let s2 = 'cbab'
    
    let result = optimal(s1,s2)
    console.log(result);
}

main()









