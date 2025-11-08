import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* ✅ Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Dr. Sugitha Hospital Logo"
            className="h-20 w-auto object-contain" // ⬅️ Increased only logo size
          />
          <span className="text-[#0B2545] font-extrabold text-2xl tracking-wide">
            DR. SUGITHA HOSPITAL
          </span>
        </div>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[#1A1A1A] font-semibold text-[15px] tracking-wide">
          <a href="/" className="hover:text-teal-600 transition-colors duration-300">
            HOME
          </a>
          <a href="/about" className="hover:text-teal-600 transition-colors duration-300">
            ABOUT
          </a>
          <a href="/service" className="hover:text-teal-600 transition-colors duration-300">
            SERVICES
          </a>
          <a href="/gallery" className="hover:text-teal-600 transition-colors duration-300">
            GALLERY
          </a>
          <a href="/contact" className="hover:text-teal-600 transition-colors duration-300">
            CONTACT US
          </a>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <div className="flex items-center">
          <button
            className="md:hidden text-[#1A1A1A] hover:text-teal-600 transition-colors duration-300 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-4 font-semibold text-[#1A1A1A] text-[15px]">
            <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition-colors duration-300">
              HOME
            </a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition-colors duration-300">
              ABOUT
            </a>
            <a href="/service" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition-colors duration-300">
              SERVICES
            </a>
            <a href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition-colors duration-300">
              GALLERY
            </a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition-colors duration-300">
              CONTACT US
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
