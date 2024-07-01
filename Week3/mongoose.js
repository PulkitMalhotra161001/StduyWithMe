//mongoDB is schemanless and mongoose is schema based
//prisma is industry standards
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pulkit161001:3m53o97BESzQWgdE@cluster0.id2q6el.mongodb.net/"
);

const User = mongoose.model("Users", {
  username: String,
  email: String,
  password: String,
});

const user = new User({
  username: "Pulkit Malhotra",
  email: "pulit@gmail.com",
  password: "124!##@",
});

user.save();
