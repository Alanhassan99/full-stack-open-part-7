import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AnecdoteContextProvider } from './anecdoteContext'

createRoot(document.getElementById('root')).render(
  <AnecdoteContextProvider><App /> </AnecdoteContextProvider>)
