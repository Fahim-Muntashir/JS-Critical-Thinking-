// const func = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func(5, 10));

function fibonacci(n) {
  let fib = [0, 1];
  if (n <= 2) return fib.slice(0, n);

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
