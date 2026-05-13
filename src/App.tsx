import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoProvider } from './components/TodoContext'


function App() {


  return (
    <TodoProvider>
    <TodoInput/>
    </TodoProvider>
  )
}

export default App
