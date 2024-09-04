import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUsers from './users/AddUsers';
import Home from './pages/Home';  // Update this to your actual file name

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AddUsers />} />
          <Route path="/home" element={<Home />} />  {/* Route for your home page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
