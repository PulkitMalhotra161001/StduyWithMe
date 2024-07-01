import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { useState } from "react";


//useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  //thi si calling infinite no of times
  // fetch("http://localhost:3000/todos").then(async (res) => {
  //   const data = await res.json();
  //   setTodos(data.todos);
  // });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
