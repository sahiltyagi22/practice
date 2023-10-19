// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

//  brute force
// function reverse(str) {
//   str.trim();
//   str = str.split(".");
//   let n = str.length;

//   let low = 0;
//   let high = n - 1;

//   while (low < high) {
//     let temp = str[low];
//     str[low] = str[high];
//     str[high] = temp;

//     low++;
//     high--;
//   }
//   let result = str.toString();
//   return result.replace(/,/g, ".");
// }

// let S = "i.like.this.program.very.much";
// console.log(reverse(S));

//  optimal Approach

function reverse1(s) {
  const words = s.trim().split(' ');

  const reversedS = words.reverse().join(" ");

  return reversedS;
}

let S = "okay one";
console.log(reverse1(S));