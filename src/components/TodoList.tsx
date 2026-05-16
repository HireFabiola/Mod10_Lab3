import { useTodos } from "./TodoContext";
import { useFilter } from "./FilterContext";
import { useTheme } from "./ThemeContext";
import TodoItem from "./TodoItem";

export function TodoList() {
  const { todos, clearCompleted } = useTodos();
  const { filter } = useFilter();
  const { theme } = useTheme();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div>
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