import './App.css'

import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoControls } from './components/TodoControls'
import { useTheme } from './components/ThemeContext'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`listContainer ${theme}`}>
      <TodoInput />
      <TodoControls />
      <TodoList />
    </div>
  )
}

export default App