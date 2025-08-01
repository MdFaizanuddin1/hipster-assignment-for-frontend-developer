// Importing StrictMode for highlighting potential problems,
// and createRoot for rendering the React app using the new concurrent API.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Creating the root React DOM node and rendering the App component inside StrictMode.
// StrictMode helps catch potential issues in development.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
