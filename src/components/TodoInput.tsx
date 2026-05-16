import { useState, type FormEvent } from "react";
import { useTodos } from "./TodoContext";
import { useTheme } from "./ThemeContext";




export function TodoInput() {

    // Inititalize input to empty string
    const [input, setInput] = useState("");

    const { addTodo } = useTodos();
    const { theme } = useTheme();
    
    // Handle form submit for both Enter key and button click
    function handleAddTodo(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Call addTodo to add inputted Todo item
        addTodo(input);

        // Clear out input field after
        setInput("");
    }

    // Create input field and add button to submit new todo item
return (
  <form className="mb-4 flex w-full" onSubmit={handleAddTodo}>

    <input
      type="text"
      placeholder="Add a todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className={`flex-1 border border-r-0 rounded-l px-3 py-2 ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-gray-700'}`}
    />

    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-r"
    >
      Add Todo
    </button>

  </form>
)

}