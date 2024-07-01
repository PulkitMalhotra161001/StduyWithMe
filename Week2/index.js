/*
const arr = [1, 2, 3, 4, 5];

const map = arr.map((i) => i * 10);

console.log(map);

const filter = arr.filter((i) => i % 2);

console.log(filter);
*/

const fs = require("fs");

fs.readFile(__dirname + "/a.json", "utf-8", (err, data) => {
  let jsonData = JSON.parse(data);

  var data = { key: "value" };

  jsonData.push(data);

  fs.writeFile(__dirname + "/a.json", JSON.stringify(jsonData), (err) => {
    if (err) return console.log(err);
    console.log("file updated");
  });
});
