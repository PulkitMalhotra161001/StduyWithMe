// 1. Express lets u create an HTTP server
// 2. Jsonwebtokens library lets you create jets
// 3. Mongoose lets you connect to your database

/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  */

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://pulkit161001:3m53o97BESzQWgdE@cluster0.id2q6el.mongodb.net/user_app"
);

const User = mongoose.model("Users", {
  username: String,
  email: String,
  password: String
});

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  console.log(email+" "+username+" "+password)

  const existUser = await User.findOne({ username: username });

  if (existUser) return res.json({ msg: "User exist" });

    // const user = new User({
    //   username: username,
    //   email: email,
    //   password: password
    // });

    // console.log(user);

    // await user.save();

   //before saving password we should hash it 
  await User.create({
    username: username,
    email: email,
    password: password,
  });

  res.send({ msg: "user created" });
});

app.listen(3000, () => {
  console.log("listen to 3000");
});
