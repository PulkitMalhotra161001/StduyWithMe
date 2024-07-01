// 2.1 => 2:02:00 - create custom promise class and 2:54:00, 2:57:00 - answer

/*
function myTime(duration) {
  //syntax - function then resolve
  const p = new Promise((resolve) => {
    setTimeout(resolve("ok"), duration);
  });
  return p;
}

console.log("Outside");

myTime(10000).then(function (args) {
  console.log("Anonymous " + args);
});
*/

/*
function sum(a, b) {
  return new Promise(function (resolve) {
    resolve(a + b);
  });
}

sum(3, 4).then(function (ans) {
  console.log(ans);
});
*/

const p1 = Promise.resolve(5);
const p2 = 131;
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Hello"), 1000);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));
