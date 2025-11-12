function SquareRoot(n) {
  let x = n;
  for (let i = 0; i < 10; i++) {
    x = 0.5 * (x + n / x);
  }
  return x;
}

console.log(SquareRoot(25)); // output: 5
