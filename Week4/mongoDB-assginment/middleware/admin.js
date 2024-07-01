const { Admin,Courses } = require("../db/database");
const jwt = require("jsonwebtoken");
const jwtPassword = require("../config");
const zod = require("zod");

const adminSchema = zod.object({
  username: zod.string().min(8),
  password: zod.string().min(8),
});

const courseSchema = zod.object({
  title: zod.string().min(8),
  description: zod.string().min(10),
  image: zod.string().url(),
  price: zod.string().min(1),
});

function validateData(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const obj = {
    username: username,
    password: password,
  };

  const valid = adminSchema.safeParse(obj);

  
  if (valid.success) return next();
  res.json({ msg: "Invalid data format" });
}

function validCourseData(req, res, next) {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;
  const price = req.body.price;

  const obj = {
    title: title,
    description: description,
    image:image,
    price:price
  };

  const valid = courseSchema.safeParse(obj);

  
  if (valid.success) return next();
  res.json({ msg: "Invalid course data format" });
}


async function adminAlreadyExist(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  //check if already exist
  const value = await Admin.findOne({
    username: username,
    password: password,
  });

  if (value) return res.json({ msg: "Admin already exist" });

  next();
}

async function adminifExist(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  //check if already exist
  const value = await Admin.findOne({
    username: username,
    password: password,
  });

  if (value) return next();

  res.json({ msg: "Admin not exist" });
}

async function courseAlreadyExist(req, res, next) {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;
  const price = req.body.price;

  //check if already exist
  const value = await Courses.findOne({
    title: title,
    description: description,
    image:image,
    price:price
  });

  

  if (value) return res.json({ msg: "Course already exist",courseId: value._id  });

  next();
}

async function checkAdminAuth(req, res, next) {
  //Bearer <your-token>'
  const token = req.headers.authorization.split(" ")[1];

  try {
    // Authentication 
    const value = jwt.verify(token, jwtPassword);

    console.log(value)

    // authorization 
    if (value && value.role=='admin') return next();

    res.json({ msg: "Invalid token" });
  } catch (e) {
    res.json({ msg: "Invalid auth" });
  }
}

module.exports = { courseAlreadyExist,validateData,validCourseData,adminAlreadyExist, adminifExist, checkAdminAuth };
