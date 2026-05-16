import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { TodoProvider } from './components/TodoContext.tsx'
import { FilterProvider } from './components/FilterContext.tsx'
import { ThemeProvider } from './components/ThemeContext.tsx'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>
)