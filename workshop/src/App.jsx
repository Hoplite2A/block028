import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <div id="container">
        <h1>

        </h1>
        <div id="navbar">

        </div>
        <div id="main-section">
          <Routes>
              <Route path="/blue" element={<h1>Blue</h1>} />
              <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App