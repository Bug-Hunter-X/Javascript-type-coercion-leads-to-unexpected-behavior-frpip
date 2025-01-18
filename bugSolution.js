function foo(a, b) {
  //Convert the string b to a number using parseInt()
  b = parseInt(b);
  //Check if b is NaN, and if it is throw an error
  if (isNaN(b)) {
    throw new Error("b is not a number");
  }
  return a + b;
}
console.log(foo(1, "1")); // output: 2
console.log(foo(1, 1)); // output: 2