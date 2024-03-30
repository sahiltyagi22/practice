function stringPalindrome(str,left , right){

    if(left>right) return 
  if(str[left] !== str[right]){
    return false
  }

  stringPalindrome(str , left+1 , right-1)

  return true



}

function main(){
    let str = 'abbc'
    let n = str.length 

    let result = stringPalindrome(str ,0 ,n-1)
    console.log(result);
}

main()