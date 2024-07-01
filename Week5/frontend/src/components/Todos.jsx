//we can get todos as an arrray of obj in props
//or we can follow modern way and directly get todos
export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
            <button>{todo.completed ? "Completed" : "Mark as Done"}</button>
          </div>
        );
      })}
    </div>
  );
}
