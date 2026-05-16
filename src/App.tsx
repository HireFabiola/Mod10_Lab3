import './App.css'

import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoControls } from './components/TodoControls'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import { useTheme } from './components/ThemeContext'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="fixed top-4 right-4">
        <ThemeToggleButton />
      </div>

      <main className="w-full max-w-md p-6">
        <TodoInput />
        <TodoControls />
        <TodoList />
      </main>
    </div>
  )
}

export default App