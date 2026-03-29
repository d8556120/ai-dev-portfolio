'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold gradient-text"
          >
            &lt;DevAI /&gt;
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-gray-300 hover:text-white transition-colors py-1">
              Home
            </Link>
            <Link href="/about" className="nav-link text-gray-300 hover:text-white transition-colors py-1">
              About
            </Link>
            <Link href="/contact" className="nav-link text-gray-300 hover:text-white transition-colors py-1">
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm !px-5 !py-2"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm !px-5 !py-2 inline-block mt-2"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
