const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://pulkit161001:3m53o97BESzQWgdE@cluster0.id2q6el.mongodb.net/todo-app")

//first Todo is the variable holding the model obj
//second todo (db will convert into lowercase) name of the model
const Todo = mongoose.model("todos",{
    title:String,
    description:String,
    completed:Boolean
})

module.exports = Todo