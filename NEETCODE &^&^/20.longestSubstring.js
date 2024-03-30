// Given a string s, find the length of the longest substring without repeating characters.


// brute approach O(n2) 

function brute(str,n){
   if(n===0) return 1 

   let longestSubstring = 0

   for(let i=0; i<n; i++){
      let set =  new Set()
      set.add(str[i])
      let currentLength = 1 

      for(let j=i+1; j<n; j++){
         if(set.has(str[j])){
            longestSubstring = Math.max(longestSubstring , currentLength)
            break;
         }

         set.add(str[j])
         currentLength += 1
         longestSubstring = Math.max(longestSubstring , currentLength)
      }
   }
   return longestSubstring
}

function main(){
   let str = 'abcd'
   let n = str.length 

   let result = brute(str,n)
   console.log(result);
}
main()

