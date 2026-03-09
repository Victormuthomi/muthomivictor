import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { LuInfinity, LuTerminal } from "react-icons/lu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "INIT", href: "#banner" },
    { name: "MANIFESTO", href: "#about" },
    { name: "STACK", href: "#skills" },
    { name: "LOGS", href: "#projects" },
    { name: "UPLINK", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-900 font-mono">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <LuInfinity
              className="text-amber-500 group-hover:rotate-180 transition-transform duration-700"
              size={28}
            />
            <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full group-hover:bg-amber-500/40 transition-all"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-tighter leading-none">
              ALCODIST<span className="text-amber-500 text-xs">_OS</span>
            </span>
            <span className="text-[8px] text-zinc-500 font-bold tracking-[0.3em] uppercase">
              Systems Architect
            </span>
          </div>
        </div>

        {/* Desktop Nav: Industrial Style */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-[10px] font-bold text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-md transition-all tracking-widest"
            >
              <span className="text-amber-500/50 mr-1 text-[8px]">
                0{navLinks.indexOf(link) + 1}
              </span>{" "}
              {link.name}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-zinc-800">
            <LuTerminal className="text-zinc-700" size={16} />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-amber-500 transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-[#080808] border-b border-zinc-800 px-6 py-8 space-y-6 flex flex-col items-center shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-zinc-400 hover:text-amber-500 tracking-[0.4em] uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
