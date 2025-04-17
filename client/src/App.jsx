// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/admin";
import InfoAkademik from "./pages/InfoAkademik";
import "./App.css"; // Import CSS file for global styles

function App() {
  return (
    <Router>
      {/* Navbar di sini jika mau global */}
      {/* <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}

      {/* Routing: hanya satu komponen ditampilkan berdasarkan path */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/info-akademik" element={<InfoAkademik />} />
        {/* Tambahkan route lain di sini */}
      </Routes>
    </Router>
  );
}

export default App;
