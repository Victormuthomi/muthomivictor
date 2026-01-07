import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { LuInfinity } from "react-icons/lu"; // Infinity icon

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <nav className="flex flex-col items-center px-4 py-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-3xl md:text-4xl mb-3">
          <span className="text-green-400">ALCODIST</span>
          <LuInfinity className="text-cyan-400" size={36} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#banner" className="hover:text-green-400">
            Banner
          </a>
          <a href="#about" className="hover:text-green-400">
            About
          </a>
          <a href="#skills" className="hover:text-green-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-green-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-400">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden absolute right-4 top-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-green-400"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 space-y-4 text-white">
          <a
            href="#banner"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Banner
          </a>
          <a
            href="#about"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
