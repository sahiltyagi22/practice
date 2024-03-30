// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
//  it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


function brute(str,n){
    if(n===0) return true 

    str = str.toLowerCase()

  let newStr = ""

  for(let i=0; i<n; i++){
    let char = str[i].charCodeAt()

    if(char >= 97 && char<=122 || char>=48 && char<=57){
        newStr+= str[i]
    }
  }

  let left = 0
  let right = newStr.length-1 
  
  while(left<=right){
    if(newStr[left] === newStr[right]){
        left++
        right--
    }else{
        return false
    }
  }
return true

}

function main(){
    let str = "0P"
    let n = str.length 

    let result = brute(str,n)
    console.log(result);
}
main()