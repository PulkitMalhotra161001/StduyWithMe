//middleare use - userAuth, inputValidation (Zod)

// Assignment
// 1. count no of requsts
// 2. find avg time your server taking to handle req's

//express is a library of js availble by node
const express = require("express");
const app = express();

//express.json() is also a middleware we use it in the app.use(__) it means for every call this runs
// express.json() used to get body we have this for body becase body must be json we are specifying
app.use(express.json());

//middleware in express is a callback function after request calls for precomputations
function middleware(req, res, next) {
  //check valid username and password
  var name = req.body.name;
  var password = req.body.password;

  console.log(name+" "+password)

  if (name != "Pulkit" || password != "123!@#") {
    return res.json({ msg: "wrong input" });
  }
  next();
}

//i can use if i want this in every call instead of writing in every call seperatly like experss.json() and global catch
// app.use(middleware);

app.post("/", middleware, (req, res) => {
  res.json({ msg: "login successfully!" });
});

// 'global catches' after calls for 'exception handling' used in app.use
app.use((err, req, res, next) => {
  res.json({ msg: "there is some error" });
  //using next we can further divide this error (server error, input, error, etc)
});

app.listen(3000, () => {
  console.log("Listen to " + 3000);
});
