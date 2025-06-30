"use client";
import { useState } from "react";
import Image from "next/image";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Background", href: "#Background" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black border-b border-gray-900">
      <div className="max-w-6xl mx-auto  flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image src="/KV logo.jpg" alt="Logo" width={50} height={49} className="rounded-full object-cover scale-75" />
          {/* <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white font-bold text-lg select-none">KV</span> */}
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-blue-400 hover:shadow-lg hover:text-shadow-blue-400/50 hover:shadow-blue-400/50 transition-colors duration-200 font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      <ul
        className={`md:hidden flex flex-col items-center bg-black border-t border-gray-900 absolute w-full left-0 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}
        style={{ top: '64px' }}
        aria-label="Mobile navigation menu"
      >
        {navLinks.map((link) => (
          <li key={link.name} className="w-full text-center">
            <a
              href={link.href}
              className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
} 