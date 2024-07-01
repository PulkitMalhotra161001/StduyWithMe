//zod used for input validatoin

/*
const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json())

app.post("/", (req, res) => {
  const kidneys = req.body.kidney;
  const response = schema.safeParse(kidneys);
  res.send({
    response,
  });
});

app.listen(3000, () => {
  console.log("listen to 3000");
});
*/

const zod = require("zod");

function validate(obj) {
  const schema = zod.object({
    username: zod.string().min(8),
    password: zod.string().min(8),
  });

  const res = schema.safeParse(obj);

  console.log(res.success);
}

validate({ username: "sdfghjgj", password: "12345678" });
