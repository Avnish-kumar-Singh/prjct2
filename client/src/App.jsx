import Footer from "./components/Footer"; // ✅ Footer import
import Skills from "./pages/Skills";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#a9f1df] text-gray-900 font-sans transition-all duration-500 overflow-x-hidden">
        {/* Optional floating blurred background effect */}
        <div className="absolute -top-24 -left-32 w-96 h-96 bg-purple-300 opacity-30 rounded-full filter blur-3xl z-0"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-300 opacity-30 rounded-full filter blur-3xl z-0"></div>

        <Navbar />

        <main className="relative z-10 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />

          </Routes>
        </main>

        <Footer /> {/* ✅ Add Footer after main content */}
      </div>
    </Router>
  );
};

export default App;
