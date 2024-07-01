//create a port to call the interest where take input principal, rate, time as query from user
const express = require("express");
const app = express();
//cors library (allows server to indicate as origins so we can use in localhost)
const cors = require("cors");
app.use(cors());


app.get("/sum", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  res.send({
    interest: interest,
    total: total,
  });
});

app.listen(3000, () => {
  console.log("listen to 3000");
});
