import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoProvider } from './components/TodoContext'
import { TodoList } from './components/TodoList'


function App() {


  return (
    <TodoProvider>
    <TodoInput/>
    <TodoList/>
    </TodoProvider>
  )
}

export default App
