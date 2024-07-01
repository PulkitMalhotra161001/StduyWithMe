const express = require("express");
const jwt = require("jsonwebtoken");
// sign and verify jwt methods is main
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  //   find function

  let exist = false;
  for (let i in ALL_USERS) {
    if (ALL_USERS[i].username == username && ALL_USERS[i].password == password)
      exist = true;
  }
  return exist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  //you get a token
  //you can check this on https://jwt.io/
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username

    console.log(decoded);
    const data = jwt.decode(token);
    console.log(data);

    res.json({
      users: ALL_USERS.filter((value) => {
        if (value.username == username) return false;
        else return true;
      }),
    });

    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token" + err,
    });
  }
});

app.listen(3001, () => {
  console.log("listen");
});
