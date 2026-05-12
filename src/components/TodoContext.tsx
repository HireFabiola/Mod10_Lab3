import { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import type { Todo } from "../types";


export function TodoProvider({ children }: { children: React.ReactNode }) {

    // Initialize the state of the todos to whatever is currently stored in localStorage
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // Trigger setting item in localStoarge when state of todos changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
}