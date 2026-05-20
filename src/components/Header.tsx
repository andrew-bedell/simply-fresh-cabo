"use client";

import { useState } from "react";
import { useLanguage, t } from "@/context/LanguageContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, toggle } = useLanguage();

  const links = [
    { href: "#desert", label: t(locale, { es: "Nosotros en Cabo", en: "About Cabo" }) },
    { href: "#towers", label: t(locale, { es: "Torres hidropónicas", en: "Hydroponic Towers" }) },
    { href: "#pricing", label: t(locale, { es: "Nuestras cajas", en: "Our Boxes" }) },
    { href: "#products", label: t(locale, { es: "Producto", en: "Produce" }) },
    { href: "#contact", label: t(locale, { es: "Contactar", en: "Contact" }) },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <svg className="w-7 h-7 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span className="text-lg font-bold text-gray-900">Simply Fresh</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-full transition-colors"
            >
              {locale === "es" ? "ES" : "EN"}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2 bg-green-800 text-white text-sm font-medium rounded-full hover:bg-green-900 transition-colors"
            >
              {t(locale, { es: "Contactar directo", en: "Contact Us" })}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="px-2.5 py-1 text-sm font-medium text-gray-600 border border-gray-200 rounded-full"
            >
              {locale === "es" ? "ES" : "EN"}
            </button>
            <button
              className="p-2 text-gray-700"
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
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2 border-t border-gray-100 pt-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-green-800 text-white text-sm font-medium rounded-full hover:bg-green-900 transition-colors mt-2"
              onClick={() => setMobileOpen(false)}
            >
              {t(locale, { es: "Contactar directo", en: "Contact Us" })}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
