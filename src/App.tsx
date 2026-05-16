import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoControls } from './components/TodoControls'
import './App.css'

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