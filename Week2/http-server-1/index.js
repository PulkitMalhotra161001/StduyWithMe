//express doesn't provide body of a request so we need to install library. There are many, one of them is body-parser
const express = require("express");
const port = 3006;
const bodyParser = require("body-parser");

const app = express();

//both will work
// app.use(bodyParser.json());
app.use(express.json());

/*
app.send("/route-handler", (req, res) => {
  res.send({
    name: "Pulkit Malhotra",
    age: 23,
  });
});

*/

function sum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

// /search?q=example => req.query
// /users/:id        => req.params


app.get("/get-sum", (req, res) => {
  // http://localhost:3006/get-sum/?n=5
  let n = req.query.n;
  let ans = sum(n);
  res.send(ans.toString());
});

app.post("/route-handler", (req, res) => {
  console.log("Header: " + req.headers.authorization);
  console.log("Body: " + req.body.key);
  res.send("<b>hi there<b>");
});

let ver = 1;
app.get("/", (req, res) => {
  res.send(`100xDevs express class ${ver}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  //auto redirect to web-page when run
});

/* Terminal - 
npm init -y
npm install express
node index.js
*/

//It restart server when file saves instead of manual restart
//npm install nodemopd
//npx nodemon index.js
