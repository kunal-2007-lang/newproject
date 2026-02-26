'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Trust', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Social Welfare', href: '#welfare' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'} backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
            S
          </div>
          <span className="font-extrabold text-xl lg:text-2xl text-gray-800 tracking-tight">
            Sarvsamaj<span className="text-orange-600">kalyan</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 font-semibold hover:text-orange-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="bg-orange-600 hover:bg-orange-700 text-white text-center px-4 py-3 rounded-lg font-bold mt-2 shadow-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
}
