"use client"

import React, { useState } from "react";
import Link from "next/link";

interface MobileNavProps {
  currentPage?: string;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/partnership", label: "Partnership" },
  { href: "/contact", label: "Contact" },
];

const MobileNav: React.FC<MobileNavProps> = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md py-3 px-4 flex justify-between items-center md:hidden relative">
      <span className="font-bold text-lg">FundLink</span>
      <button
        className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 flex flex-col py-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                "block text-gray-700 px-4 py-2 " +
                (currentPage === link.href ? "bg-[#a8b5a0] text-white" : "hover:bg-gray-100")
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileNav; 