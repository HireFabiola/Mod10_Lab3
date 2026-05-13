import { useTodos } from "./TodoContext";
import TodoItem from "./TodoItem";

// Function call to display todo list
export function TodoList() {
  const { todos } = useTodos();

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}