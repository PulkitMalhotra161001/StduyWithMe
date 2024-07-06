import { todos } from "../store/atoms/todos";
import { useRecoilValue } from "recoil";
import "./App.css";

function App() {
  return (
    <div>
      <input placeholder="title"></input>
      <br></br>
      <input placeholder="title"></input>
      <br></br>
      <button>Add to todo</button>

      <PrintTodos />
    </div>
  );
}

function PrintTodos() {
  const todos = useRecoilValue(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description}></Todo>
      ))}
    </div>
  );
}

function Todo({title,description}){
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default App;
