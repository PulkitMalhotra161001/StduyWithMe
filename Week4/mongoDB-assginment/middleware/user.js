const { User, Courses } = require("../db/database");
const jwt = require("jsonwebtoken");
const jwtPassword = require("../config");
const zod = require("zod");
const mongoose = require("mongoose");

const userSchema = zod.object({
  username: zod.string().min(8),
  password: zod.string().min(8),
});

function validateData(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const obj = {
    username: username,
    password: password,
  };

  const valid = userSchema.safeParse(obj);

  if (valid.success) return next();
  res.json({ msg: "Invalid data format" });
}

async function userAlreadyExist(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  //check if already exist
  const value = await User.findOne({
    username: username,
    password: password,
  });

  if (value) return res.json({ msg: "User already exist" });

  next();
}

async function userifExist(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  //check if already exist
  const value = await User.findOne({
    username: username,
    password: password,
  });

  if (value) return next();

  res.json({ msg: "User not exist" });
}

async function validateUser(req, res, next) {
  //Bearer <your-token>'
  const token = req.headers.authorization.split(" ")[1];

  try {
    // Authentication
    const value = jwt.verify(token, jwtPassword);

    // authorization
    if (value && value.role == "user") {
      req.username = value.username;
      return next();
    }

    res.json({ msg: "Invalid token" });
  } catch (e) {
    console.log(e);
    res.json({ msg: "Invalid auth" });
  }
}

async function validCourse(req, res, next) {
  const courseId = req.params.courseId;

  //check whether courseId is valid
  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    return res.status(400).send("Invalid courseId format");
  }

  const value = await Courses.findOne({
    _id: courseId,
  });

  //course invalid
  if (value == null) return res.status(400).send("No such course exist");

  next();
}

module.exports = {
  validateData,
  userAlreadyExist,
  userifExist,
  validateUser,
  validCourse,
};
