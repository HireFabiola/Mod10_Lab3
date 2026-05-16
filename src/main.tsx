import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoProvider } from './components/TodoContext.tsx';
import { FilterProvider } from './components/FilterContext.tsx';
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
    <FilterProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </FilterProvider>
    </ThemeProvider>
  </StrictMode>,
)
