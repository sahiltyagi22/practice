// Given a string str, the task is to sort the string according to the frequency of each character, in ascending order.
// If two elements have the same frequency, then they are sorted in lexicographical order.

function frequency(str, element) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === element) {
      count++;
    }
  }
  return count;
}

function sortByfrequency(str, n) {
  if (n <= 1) return str;

  let resultStr = "";

  let hashArray = new Array(n);

  for (let i = 0; i < n; i++) {
    hashArray[i] = [frequency(str,str[i]), str[i]];
  }

  hashArray.sort();

  for (let i = 0; i < hashArray.length; i++) {
    resultStr += hashArray[i][1];
  }
  return resultStr;
}

function main(){
    let str = 'geeksforgeeks'
    let n = str.length 

    let result = sortByfrequency(str,n)
    console.log(result);
}

main()