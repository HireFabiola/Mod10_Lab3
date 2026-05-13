import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoProvider } from './components/TodoContext'
import { TodoList } from './components/TodoList'


function App() {
  return (
    <div className="listContainer">
      < TodoProvider >
        <TodoInput />
        <TodoList />
      </TodoProvider >
    </div >
  )
}
export default App
