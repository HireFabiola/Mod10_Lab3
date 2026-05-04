import { useState } from "react";
import { TodoInput } from "./TodoInput";
import type { Todo } from "../types";
import { useState } from "react";

export function TodoProvider({ children }: { children: React.ReactNode }){
    
// Initialize the state of the todos to whatever is currently stored in localStorag
const [todos, setTodos] = useState<Todo[]>(())=>{
    const 
}

}