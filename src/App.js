import React from 'react';
import './style/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Package from './pages/package';
import Home from './pages/index';
import About from './pages/about-us';
import Contact from './pages/contact-us';
import Blog from './pages/blog';


function App() {
  return (
    <div>
      <Router>
        {/* Layout wraps all the routes */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
