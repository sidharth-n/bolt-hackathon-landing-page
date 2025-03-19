import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "./screens/LandingPage/LandingPage"
// Import your other components here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add your other routes here */}
      </Routes>
    </Router>
  )
}

export default App
