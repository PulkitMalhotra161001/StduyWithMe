const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pulkit161001:3m53o97BESzQWgdE@cluster0.id2q6el.mongodb.net/course_data")


const User = mongoose.model("User",{
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses"
    }]
})

const Admin = mongoose.model("Admin",{
    username:String,
    password:String
})

const Courses = mongoose.model("Courses",{
    title:String,
    description:String,
    image:String,
    price:Number
})

module.exports = {Admin,User,Courses}
