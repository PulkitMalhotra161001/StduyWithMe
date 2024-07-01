const express = require("express");
const mongoose = require("mongoose");
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
const app = express();
const PORT = 3000;

app.use(express.json());

//while signing the JWT we must
//distinguish between user and admin
//add expiry of JWT token

app.use("/admin", adminRoute);
app.use("/user", userRoute);

app.use("*",(req,res)=>{
    res.json(`Invalid ${req.method} call ${req.originalUrl}`)
})

// 'global catches' after calls for 'exception handling' used in app.use
app.use((err, req, res, next) => {
  res.json({ msg: "there is some error : "+err });
  //using next we can further divide this error (server error, input, error, etc)
});

app.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
