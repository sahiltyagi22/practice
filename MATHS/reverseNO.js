//  Revere a given number

function reverse(n) {
  let x = n;
  let res = 0;
  while (x !== 0) {
    let digit = x % 10;
    res = res * 10 + digit;

    x = Math.floor(x / 10);
  }
  return res;
}

console.log(reverse(12345));
