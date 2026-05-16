import { useTodos } from './TodoContext'
import { useFilter } from './FilterContext'

export function TodoControls() {

  // Access todos and clearCompleted from TodoContext
  const { todos, clearCompleted } = useTodos()

  // Access filter state and setFilter action from FilterContext
  const { filter, setFilter } = useFilter()

  // Determine whether any completed todos exist
  const hasCompletedTodos = todos.some(
    (todo) => todo.completed
  )

  // Shared button styling helper
  function getFilterButtonClass(currentFilter: string) {
    return `
      px-4 py-2 rounded border transition-colors
      ${filter === currentFilter
        ? 'bg-blue-500 text-white border-blue-500'
        : 'bg-white text-black border-gray-300 hover:bg-gray-100'
      }
    `
  }

  return (

    <div className="todoControls flex flex-col items-center gap-4">

      {/* Filter Buttons */}
      <div className="filterButtons flex justify-center gap-3">

        <button
          onClick={() => setFilter('all')}
          className={getFilterButtonClass('all')}
        >
          All
        </button>

        <button
          onClick={() => setFilter('active')}
          className={getFilterButtonClass('active')}
        >
          Active
        </button>

        <button
          onClick={() => setFilter('completed')}
          className={getFilterButtonClass('completed')}
        >
          Completed
        </button>

      </div>

      {/* Clear Completed Button */}
      <button
        onClick={clearCompleted}
        disabled={!hasCompletedTodos}
        className="px-4 py-2 rounded border disabled:opacity-50"
      >
        Clear Completed
      </button>

    </div>
  )
}