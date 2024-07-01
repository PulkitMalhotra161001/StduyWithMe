import { useState } from "react";
import "./App.css";

function App() {
  // count is variable and setCount is a function and by default value is 0
  //useState return two value one is variable and another is func and we are getting it

  /*
  const [count, setCount] = useState(0);

  return (
    <div>
      { <button onClick={()=>setCount(count+1)}>
        count is {count}
      </button>}

      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
  */

  //setTodos update the state variable and trigger the re-render
  const [todos, setTodos] = useState([
    {
      title: "title 1",
      description: "des. 1",
      completed: false,
    },
    {
      title: "title 2",
      description: "des. 2",
      completed: false,
    },
    {
      title: "title 3",
      description: "des. 3",
      completed: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addOneMore = () => {
    if (title.trim() === "") {
      alert("Title cannot be empty");
      return;
    }

    if (description.trim() === "") {
      alert("Description cannot be empty");
      return;
    }

    setTodos([
      ...todos,
      {
        title: title,
        description: description,
      },
    ]);

    setTitle("");
    setDescription("");
  };cd

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <br></br>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br></br>
      <button onClick={addOneMore}>Add Todo</button>
      {todos.map((i) => {
        return <Todo title={i.title} description={i.description}></Todo>;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}

export default App;
