import { useState, type MouseEvent } from "react";
import { useTodos } from "./TodoContext";




export function TodoInput() {

    // Inititalize input to empty string
    const [input, setInput] = useState("");

    const { addTodo } = useTodos();
    
    // Declared function 
    function handleAddTodo(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        // Call addTodo to add inputted Todo item
        addTodo(input);

        // Clear out input field after
        setInput("");
    }

    // Create input field with listener
    return (
        <div className="inputField" >
            <input type="text" placeholder="Add a todo..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>

    )

}