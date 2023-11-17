import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import "./App.css";

export default function App() {
  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="/home">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
