import { useTodos } from './TodoContext'
import { useFilter } from './FilterContext'
import { ThemeToggleButton } from './ThemeToggleButton'

export function TodoControls() {

  // Access todos and clearCompleted from TodoContext
  const { todos, clearCompleted } = useTodos()

  // Access filter state and setFilter action from FilterContext
  const { filter, setFilter } = useFilter()

  // Determine whether any completed todos exist
  const hasCompletedTodos = todos.some(
    (todo) => todo.completed
  )

  return (

    <div className="todoControls">
        <ThemeToggleButton />

      {/* Filter Buttons */}
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

      {/* Clear Completed Button */}
      <button
        onClick={clearCompleted}
        disabled={!hasCompletedTodos}
      >
        Clear Completed
      </button>

    </div>
  )
}