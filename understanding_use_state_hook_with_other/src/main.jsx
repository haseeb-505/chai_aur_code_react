import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Search from './search.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<App />} />
        
        {/* Route for the search page */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  </StrictMode>,
)

