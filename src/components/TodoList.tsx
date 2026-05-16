import { useTodos } from "./TodoContext";
import { useFilter } from "./FilterContext";
import TodoItem from "./TodoItem";

// Function call to display todo list
export function TodoList() {

  // Access todos from TodoContext
  const { todos } = useTodos();

  // Access current visibility filter from FilterContext
  const { filter } = useFilter();

  // Filter todos based on current filter value
  const filteredTodos = todos.filter((todo) => {

    // Show only active todos
    if (filter === "active") {
      return !todo.completed;
    }

    // Show only completed todos
    if (filter === "completed") {
      return todo.completed;
    }

    // Default: show all todos
    return true;
  });

  return (
    <div>
      <h2>Todo List</h2>

      {/* Render filtered todo list */}
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}