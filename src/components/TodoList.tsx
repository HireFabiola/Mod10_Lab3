import { useTodos } from "./TodoContext";

// Function call to display todo list
export function TodoList() {
  const { todos } = useTodos();

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
}