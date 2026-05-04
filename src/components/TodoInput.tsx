import { useState } from "react";

export function TodoInput(){

    // Inititalize input to empty string
    const [input, setInput] = useState("";)


    // Create input field with listener
    return(
        <div>
            <input type = "text" placeholder = "Add a todo..." value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
    )
}