import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        {/* Contact Info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope className="text-indigo-400" />
            <a
              href="mailto:avnishkumar86030@gmail.com"
              className="hover:underline text-indigo-300"
            >
              avnishkumar86030@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhoneAlt className="text-indigo-400" />
            <a
              href="tel:+91XXXXXX9090"
              className="hover:underline text-indigo-300"
            >
              +91 ******9090
            </a>
          </div>
        </div>

        {/* Logo or Name */}
        <div className="text-lg font-bold tracking-wide text-indigo-200 text-center">
          © 2025 Avnish Kumar • Full Stack Developer
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 justify-center">
          <a
            href="https://github.com/Avnish-kumar-Singh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/avnish-kumar-singh-593ab4275"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
