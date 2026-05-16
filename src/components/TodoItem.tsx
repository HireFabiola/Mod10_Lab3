import { useState } from "react";
import { useTodos } from "./TodoContext";
import { useTheme } from "./ThemeContext";
import type { TodoItemProps, Todo } from "../types";

// TodoItem component receives individual todo object as props
export default function TodoItem({ todo }: TodoItemProps) {

  // Destructure functions from TodoContext
  const { toggleTodo, deleteTodo, editTodo } = useTodos();

  // Track whether user is currently editing todo item
  const [isEditing, setIsEditing] = useState(false);

  const { theme } = useTheme();

  // Store edited text in state
  const [editText, setEditText] = useState(todo.text);

  // Handle submit when editing todo
  function handleEditSubmit(event: React.FormEvent<HTMLFormElement>) {

    // Prevent page refresh
    event.preventDefault();

    // Call editTodo function from context
    editTodo(todo.id, editText);

    // Exit edit mode
    setIsEditing(false);
  }

return (
  <li className="todo-item flex items-center justify-between gap-4 px-4 py-3 mb-2">

    {isEditing ? (

      // Edit form
      <form
        className="edit-form flex w-full items-center gap-2"
        onSubmit={handleEditSubmit}
      >
        <input
          type="text"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          className={`flex-1 border rounded px-3 py-2 ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-gray-700'}`}
        />

        <button type="submit" className={`border rounded px-3 py-2 ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-indigo-600 text-white'}`}>
          Save
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className={`border rounded px-3 py-2 ${theme === 'light' ? '' : 'bg-gray-600 text-white'}`}
        >
          Cancel
        </button>
      </form>

    ) : (

      <>
        {/* Left side: checkbox + todo text */}
        <label className="todo-text flex items-center gap-3 flex-1">

          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />

          <span className={todo.completed ? "completed line-through text-gray-400" : (theme === 'light' ? 'text-black' : 'text-white')}>
            {todo.text}
          </span>
        </label>

        {/* Right side: action text */}
        <div className="todo-actions flex items-center gap-4">

          <button
            onClick={() => setIsEditing(true)}
            aria-label="Edit todo"
            className="text-sky-600 hover:text-sky-800 focus:outline-none"
          >
            ✏️
          </button>

          <button
            onClick={() => deleteTodo(todo.id)}
            aria-label="Delete todo"
            className="text-red-600 hover:text-red-800 focus:outline-none"
          >
            🗑️
          </button>

        </div>
      </>
    )}
  </li>
);
}