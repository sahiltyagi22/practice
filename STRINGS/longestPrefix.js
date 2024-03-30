// check for the longest prefix in the array of strings  


function longestPrefix(str){

    let length = 0 

    let firstElement = str[0]

    for(let i=0; i < firstElement.length; i++){
        let ithElement = firstElement[i]

        let check = helper(str , ithElement ,i)

        if(check){
            length++
        }else{
            return length
        }
    }
   
}


function helper(str,element,index){
    
    for(j=0; j<str.length; j++){
        if(str[j][index] !==element){
            return false
        }
    }
        return true
}

function main(){
    let str  = ["flower", "flow", "flight"]

    let result =  longestPrefix(str)

    console.log(result);
    
}

main()