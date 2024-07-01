const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const { Admin, Courses } = require("../db/database");
const {  validateData, courseAlreadyExist,validCourseData, adminAlreadyExist,  adminifExist,  checkAdminAuth} = require("../middleware/admin");
const jwtPassword = require("../config");

app.post("/signup", validateData, adminAlreadyExist, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const admin = new Admin({
    username: username,
    password: password,
  });

  await admin.save();

  res.json({
    msg: "admin created",
  });
});

app.post("/signin", validateData, adminifExist, (req, res) => {
  const username = req.body.username;
  var token = jwt.sign({ username: username,role:'admin', expiresIn: '1h' }, jwtPassword);
  return res.json({
    token,
  });
});

app.post("/courses", validCourseData, courseAlreadyExist,checkAdminAuth, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;
  const price = req.body.price;

  //duplicate course
  const newCourse = await Courses.create({
    title,
    description,
    image,
    price,
  });

  res.json({ msg: "course created", courseId: newCourse._id });
});

app.get("/courses", checkAdminAuth, async (req, res) => {
  const courses = await Courses.find({});

  res.json({ courses: courses });
});

module.exports = app;
