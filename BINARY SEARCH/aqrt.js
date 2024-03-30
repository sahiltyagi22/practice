// Problem Statement: You are given a positive integer n.
//  Your task is to find and return its square root. If ‘n’ is not a perfect square, then return the floor value of ‘sqrt(n)’.

// Note: The question explicitly states that if the given number, n, is not a perfect square,
// our objective is to find the maximum number, x, such that x squared is less than or equal to n (x*x <= n). In other words,
//  we need to determine the floor value of the square root of n.

function sqrt(n) {
  if (n === 1) return 1;

  let ans = -1;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let product = mid * mid;

    if (product <= n) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans
}


function main(){
    let n = 49
    let result = sqrt(n)

    console.log(result);
}

main()