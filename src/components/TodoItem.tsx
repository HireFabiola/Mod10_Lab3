import { useState } from "react";
import { useTodos } from "./TodoContext";
import type { TodoItemProps, Todo } from "../types";

// TodoItem component receives individual todo object as props
export default function TodoItem({ todo }: TodoItemProps) {

  // Destructure functions from TodoContext
  const { toggleTodo, deleteTodo, editTodo } = useTodos();

  // Track whether user is currently editing todo item
  const [isEditing, setIsEditing] = useState(false);

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
  <li className="todo-item flex items-center justify-between gap-4 border rounded px-4 py-3 mb-2">

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
          className="flex-1 border rounded px-3 py-2"
        />

        <button type="submit" className="border rounded px-3 py-2">
          Save
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="border rounded px-3 py-2"
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

          <span
            className={
              todo.completed
                ? "completed line-through text-gray-400"
                : ""
            }
          >
            {todo.text}
          </span>
        </label>

        {/* Right side: action buttons */}
        <div className="todo-actions flex items-center gap-2">

          <button
            onClick={() => setIsEditing(true)}
            className="border rounded px-3 py-1"
          >
            Edit
          </button>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="border rounded px-3 py-1"
          >
            Delete
          </button>

        </div>
      </>
    )}
  </li>
);
}