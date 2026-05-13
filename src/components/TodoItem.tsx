import { useState } from "react";
import { Todo, useTodos } from "./TodoContext";
import type { TodoItemProps } from "../types";

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
    <li className="todo-item">

      {/* Conditional rendering:
          If editing is true show edit form
          Otherwise show normal todo item
      */}

      {isEditing ? (

        // Edit form
        <form className="edit-form" onSubmit={handleEditSubmit}>

          {/* Controlled input field */}
          <input
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
          />

          {/* Save edited todo */}
          <button type="submit">Save</button>

          {/* Exit edit mode without saving */}
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>

      ) : (

        // Default todo display
        <>
          <label className="todo-text">

            {/* Checkbox toggles completed state */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            {/* Add completed class if todo is completed */}
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </label>

          {/* Action buttons */}
          <div className="todo-actions">

            {/* Turn on edit mode */}
            <button onClick={() => setIsEditing(true)}>
              Edit
            </button>

            {/* Delete todo item */}
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>

          </div>
        </>
      )}
    </li>
  );
}