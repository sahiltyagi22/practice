// Find the n’th term in Look-and-say (Or Count and Say) Sequence. The look-and-say sequence is the sequence of the below integers:
// 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, …

function countAndSay(n) {
  if (n === 0) return -1;

  if (n === 1) return "1";
  if (n === 2) return "11";

  let str = "11";

  for (let i = 3; i <= n; i++) {
    let temp = "";
    let count = 1;

    for (let j = 1; j < str.length; j++) {
      if (str[j] !== str[j - 1]) {
        temp += count + str[j - 1];
        count = 1;
      } else {
        count++;
      }
    }

    temp += count + str[str.length - 1];

    str = temp;
  }

  return str;
}

function main() {
  let n = 5;
  let result = countAndSay(n);

  console.log(result);
}

main();
