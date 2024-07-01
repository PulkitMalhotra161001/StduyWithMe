const express = require("express");

const { createTodo, updateTodo } = require("./types");
const Todo = require("./db");
const app = express();

app.use(express.json());

//cors allows every request to hit this backend irrespective of security
const cors = require("cors");

app.use(cors());

app.get("/todos", async (req, res) => {
  const data = await Todo.find({});
  res.json({ todos: data });
});

app.post("/todos", async (req, res) => {
  const obj = {
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  const value = createTodo.safeParse(obj);

  if (!value.success) return res.status(411).json({ msg: "Invalid input" });

  //put in mongoDB
  const todo_created = await Todo.create(obj);

  res.json({ msg: "Todo Created", id: todo_created._id });
});

app.put("/completed", async (req, res) => {
  const parsePayload = updateTodo.safeParse(req.body);

  if (!parsePayload.success)
    return res.status(411).json({ msg: "Invalid input" });

  try {
    await Todo.updateOne({ _id: req.body.id }, { completed: true });
  } catch (e) {
    return res.status(411).json({ msg: "Todo id invalid" });
  }

  res.json({ msg: "Todo marked as completed" });
});

app.listen(3000, () => {
  console.log("Listen to 3000");
});
