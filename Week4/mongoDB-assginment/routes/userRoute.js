const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const jwtPassword = require("../config");
const { User, Courses } = require("../db/database");
const {
    validateData,
  userAlreadyExist,
  userifExist,
  validateUser,validCourse
} = require("../middleware/user");

app.post("/signup", validateData, userAlreadyExist, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = new User({
    username: username,
    password: password,
  });

  await user.save();

  res.json({
    msg: "user created",
  });
});

app.post("/signin", validateData,userifExist, (req, res) => {
  const username = req.body.username;
  var token = jwt.sign(
    { username: username, role: "user", expiresIn: "1h" },
    jwtPassword
  );
  return res.json({
    token,
  });
});

app.get("/courses", async (req, res) => {
  const courses = await Courses.find({});

  res.json({ courses: courses });
});

//invalid course id
app.post("/courses/:courseId", validateUser,validCourse, async (req, res) => {
  //username is passed throught validateUser middleware
  const username = req.username;  
  const courseId = req.params.courseId;

  const value = await User.updateOne(
    { username: username },
    {
      $addToSet: { purchasedCourses: courseId },
    }
  );

  if (value.modifiedCount == 0)
    return res.json({ msg: "Already purchased course" });

  res.json({ msg: "Course purchased" });
});

app.get("/purchasedCourses", validateUser, async (req, res) => {
  //username is passed throught validateUser middleware
  const username = req.username;

  const user = await User.findOne({
    username: username,
  });

  //course id's but we want name
  // console.log(user.purchasedCourses);

  //find all occurance in Course table
  const courses = await Courses.find({
    //where _id is in the
    _id: {
      //user purchased courses
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = app;
