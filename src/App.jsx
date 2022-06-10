import React from 'react'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Landing from './Pages/Landing'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={Landing}/>
        <Route path="/login"  />
      </Routes>
    </Router>
    </>
  )
}

export default App