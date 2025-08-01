import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Code2, Menu, X } from "lucide-react";

function Navbar({ mode, setmode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    mode === "light" ? setmode("dark") : setmode("light");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3">
          <Code2 className="w-8 h-8 text-indigo-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            AlgoVibs
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-300 font-medium">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/roadmap" className="hover:text-indigo-400 transition">Roadmap</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
        </div>

        {/* Dark Mode Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleClick}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            {mode === "light" ? (
              <Moon className="w-6 h-6 text-indigo-400" />
            ) : (
              <Sun className="w-6 h-6 text-yellow-400" />
            )}
          </button>

          {/* Hamburger Menu Button (only mobile) */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 flex flex-col gap-4 text-gray-300 font-medium">
          <Link to="/" className="hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
<Link to="/roadmap" className="hover:text-indigo-400 transition">
  Roadmap
</Link>          <Link to="/about" className="hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
