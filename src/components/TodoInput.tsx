import { useState } from "react";



export function TodoInput() {

    // Inititalize input to empty string
    const [input, setInput] = useState("");

    // Declared function 
    function handleAddTodo(e) {
        // Call addTodo to addd inputed Todo item
        addTodo("input");

        // Clear out input field after
        setInput("");
    }

    // Create input field with listener
    return (
        <div>
            <input type="text" placeholder="Add a todo..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>
            <p>Input: {input}</p>
        </div>

    )

}