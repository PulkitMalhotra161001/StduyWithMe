import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      {/* first curly brace for assigning atrributes and second bcz this is an obj */}
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br></br>
      <button onClick={addTodoInDB}>Add a Todo</button>
    </div>
  );

  function addTodoInDB() {
    console.log(title + " " + description);

    //using axios is easy
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      //we have to send this otherwise backend will not be able to detect
      //because we have to also get express.json() to get json in body so we have to specificilly deine
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      alert("ToDo added")
    });
  }
}
