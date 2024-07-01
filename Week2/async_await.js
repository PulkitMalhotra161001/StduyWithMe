function sum(a, b) {
  return new Promise(function (resolve) {
    resolve(a + b);
  });
}

async function my(a, b) {
  let response = await sum(a, b);
  console.log(response);
}

my(3, 4);