import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

// Import custom context hook
import { useTodos } from './components/TodoContext'

function App() {

  // Access todos state and clearCompleted function from context
  const { todos, clearCompleted } = useTodos()

  // Check whether any completed todos exist
  // Used to enable/disable the button dynamically
  const hasCompletedTodos = todos.some(
    (todo) => todo.completed
  )

  return (
    <div className="listContainer">
      <TodoInput />
      <TodoList />

      {/* Button to remove all completed todos */}
      <button
        onClick={clearCompleted}
        disabled={!hasCompletedTodos}
      >
        Clear Completed
      </button>

    </div>
  )
}

export default App