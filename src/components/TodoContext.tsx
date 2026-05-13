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

    function addTodo(text: string) {
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

        return (
           <>{children}</>
        )
    }
}
