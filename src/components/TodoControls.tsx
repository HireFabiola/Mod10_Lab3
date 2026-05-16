import { useFilter } from './FilterContext'

export function TodoControls() {
  // Access filter state and setFilter action from FilterContext
  const { filter, setFilter } = useFilter()

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

    </div>
  )
}