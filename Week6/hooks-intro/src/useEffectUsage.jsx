import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button>
      <button onClick={() => setPage(4)}>4</button>
      <Todo id={page}></Todo>
    </div>
  );
}

function Todo({ id }) {
  console.log(id);

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id).then((res) => {
      //when we use axios we have to write .data
      console.log(res.data.todo);
      setTodo(res.data.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h1>{todo.description}</h1>
    </div>
  );
}

export default App;
