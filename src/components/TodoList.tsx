import { useTodos } from "./TodoContext";
import { useFilter } from "./FilterContext";
import { useTheme } from "./ThemeContext";
import TodoItem from "./TodoItem";

// Function call to display todo list
export function TodoList() {

  // Access todos from TodoContext
  const { todos, clearCompleted } = useTodos();

  // Access current visibility filter from FilterContext
  const { filter } = useFilter();

  const { theme } = useTheme();

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

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div>
      {/* Render filtered todo list */}
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {hasCompletedTodos && (
        <div className="mt-4 text-center">
          <span
            onClick={clearCompleted}
            role="button"
            className={`text-sm cursor-pointer ${theme === 'light' ? 'text-red-600' : 'text-red-300'}`}
          >
            Clear Completed
          </span>
        </div>
      )}
    </div>
  );
}