import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Social icons

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Skills", path: "/skills" },

  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Avnish Kumar</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative pb-1 transition duration-300 hover:text-indigo-600 ${
                location.pathname === link.path
                  ? "text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}

          {/* Social icons */}
          <a
            href="https://github.com/Avnish-kumar-Singh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/avnish-kumar-singh-593ab4275"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-lg space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 border-b border-gray-200 ${
                location.pathname === link.path
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Social icons in mobile */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://github.com/Avnish-kumar-Singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/avnish-kumar-singh-593ab4275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
