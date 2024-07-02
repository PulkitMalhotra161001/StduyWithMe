//Wrapper Component
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // setInterval(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
    // }, 1000);
  }, []);

  return (
    <div>
      {/* we can either pass the name and call the tag */}
      {/* or we can pass the tag element and render */}
      {/* <CardWrapper>hi there</CardWrapper> */}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  console.log(title + " " + description);
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

// we can get children component which ever written inside CardWrapper component
function CardWrapper({ children }) {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

export default App;
