import { createContext, useContext, useEffect, useState } from "react";
import type { Todo, TodoContextType } from "../types";

// Create the TodoContext
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Create Provider component
export function TodoProvider({ children }: { children: React.ReactNode }) {

  // Initialize the state of the todos to whatever is currently stored in localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Trigger setting item in localStorage when state of todos changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to add todo item
  function addTodo(text: string) {
    console.log(text);

    // trim white space
    const trimmedText = text.trim();

    // if empty do nothing
    if (!trimmedText) return;

    // else create a newTodo object
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: trimmedText,
      completed: false,
    };

    // set object in setTodo array
    setTodos([...todos, newTodo]);
  }

  // Function to toggle completion
  function toggleTodo(id: string) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Function to delete todo item
  function deleteTodo(id: string) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  // Function to edit todo item
  function editTodo(id: string, newText: string) {
    const trimmedText = newText.trim();
    if (!trimmedText) return;

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: trimmedText } : todo
      )
    );
  }

  // Share todos state and actions with child components
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook to access TodoContext
export function useTodos() {

  // Store TodoContext in variable
  const context = useContext(TodoContext);

  // If component tries to use context outside Provider throw error
  if (!context) {
    throw new Error("useTodos must be used inside TodoProvider");
  }

  // Return context
  return context;
}