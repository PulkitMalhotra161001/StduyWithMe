// 1. Callback

// 2. Promise (then)

// 3. Async/await

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function solve(a, b, callback) {
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}

console.log(solve(1, 2, cube));

// console.log(
//   solve(2, 4, function (n) {
//     return n * n;
//   })
// );

// console.log(
//   solve(2, 4, (n) => {
//     return n * n;
//   })
// );
