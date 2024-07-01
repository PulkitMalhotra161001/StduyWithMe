// we have 2 async function readFile, setTimeOut

const fs = require("fs");

fs.readFile("practice/Week1/sample.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Hello World");
