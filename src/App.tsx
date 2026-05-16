import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

// Import custom context hooks
import { useTodos } from './components/TodoContext'
import { useFilter } from './components/FilterContext'

function App() {

  // Access todos state and clearCompleted function from TodoContext
  const { todos, clearCompleted } = useTodos()

  // Access current filter and setFilter function from FilterContext
  const { filter, setFilter } = useFilter()

  // Check whether any completed todos exist
  // Used to enable/disable the Clear Completed button dynamically
  const hasCompletedTodos = todos.some(
    (todo) => todo.completed
  )

  return (
    <div className="listContainer">
      <TodoInput />

      {/* Filter buttons update the current visibility filter */}
      <div className="filterButtons">
        <button
          onClick={() => setFilter('all')}
          disabled={filter === 'all'}
        >
          All
        </button>

        <button
          onClick={() => setFilter('active')}
          disabled={filter === 'active'}
        >
          Active
        </button>

        <button
          onClick={() => setFilter('completed')}
          disabled={filter === 'completed'}
        >
          Completed
        </button>
      </div>

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

import './App.css'

import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoControls } from './components/TodoControls'

function App() {
  return (
    <div className="listContainer">

      <TodoInput />

      {/* Component containing filter + clear buttons */}
      <TodoControls />

      <TodoList />

    </div>
  )
}

export default App