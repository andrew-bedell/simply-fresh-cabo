"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LeafIcon className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-green-900 tracking-tight">
              Simply Fresh <span className="text-green-600">Cabo</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Why Us
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Produce
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Our Farm
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-green-700 text-white text-sm font-semibold rounded-full hover:bg-green-800 transition-colors"
            >
              Order Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-green-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a
              href="#features"
              className="text-sm font-medium text-green-800 hover:text-green-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-green-800 hover:text-green-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Produce
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-green-800 hover:text-green-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-green-800 hover:text-green-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Our Farm
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-green-700 text-white text-sm font-semibold rounded-full hover:bg-green-800 transition-colors w-full"
              onClick={() => setMobileOpen(false)}
            >
              Order Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
