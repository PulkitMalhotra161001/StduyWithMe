import React, { useState } from "react";

let counter = 4;

function App() {
  // const [name, setName] = useState("Pulkit");

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "title 1",
      description: "decription 1",
    },
    {
      id: 2,
      title: "title 2",
      description: "decription 2",
    },
    {
      id: 3,
      title: "title 3",
      description: "decription 3",
    },
  ]);

  return (
    //we can get rid of this unnecessary div element we can do this
    // <></> or <React.Fragment></React.Fragment>
    // <div>
    //   <Header title="Pulkit"></Header>
    //   <Header2 title={"Malhotra"}></Header2>
    // </div>

    // <div>
    //   <button onClick={changeName}>Click</button>
    //   <Header title={name}></Header>
    //   <Header title="Kaithal"></Header>
    // </div>

    <div>
      <button onClick={addTodo}>Click</button>
      {todos.map((todo) => (
        //key must be added to uniqely identify array element bcz it help to reduce re-render DOM element
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </div>
  );

  function addTodo() {
    console.log(counter)
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  function changeName() {
    setName(Math.random());
  }

  function Todo({ title, description }) {
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

//obj destructuring
//we can also pass props then props.title
// function Header({ title }) {
//   console.log("Rerender headrer 1");
//   return <div>{title}</div>;
// }

const Header = React.memo(function Header({ title }) {
  console.log("Rerender headrer 1");
  return <div>{title}</div>;
});

export default App;
