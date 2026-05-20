"use client";

import { useLanguage, t } from "@/context/LanguageContext";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="bg-green-950 text-green-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              <span className="text-lg font-bold text-white">Simply Fresh</span>
            </div>
            <p className="text-sm text-green-400/60 leading-relaxed">
              {t(locale, {
                es: "Producto hidropónico cultivado en Cabo San Lucas, B.C.S., México.",
                en: "Hydroponic produce grown in Cabo San Lucas, B.C.S., Mexico.",
              })}
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              {t(locale, { es: "Producto", en: "Products" })}
            </h4>
            <ul className="space-y-2.5 text-sm text-green-400/60">
              <li><a href="#products" className="hover:text-green-300 transition-colors">{t(locale, { es: "Nuestro catálogo", en: "Our catalog" })}</a></li>
              <li><a href="#pricing" className="hover:text-green-300 transition-colors">{t(locale, { es: "Canastas y precios", en: "Baskets & prices" })}</a></li>
              <li><a href="#towers" className="hover:text-green-300 transition-colors">{t(locale, { es: "Torres hidropónicas", en: "Hydroponic towers" })}</a></li>
            </ul>
          </div>

          {/* Sobre nosotros */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              {t(locale, { es: "Sobre nosotros", en: "About Us" })}
            </h4>
            <ul className="space-y-2.5 text-sm text-green-400/60">
              <li><a href="#desert" className="hover:text-green-300 transition-colors">{t(locale, { es: "Nuestra historia", en: "Our story" })}</a></li>
              <li><a href="#towers" className="hover:text-green-300 transition-colors">{t(locale, { es: "Tecnología", en: "Technology" })}</a></li>
              <li><a href="#contact" className="hover:text-green-300 transition-colors">{t(locale, { es: "Contacto", en: "Contact" })}</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              {t(locale, { es: "Contacto", en: "Contact" })}
            </h4>
            <ul className="space-y-2.5 text-sm text-green-400/60">
              <li>Cabo San Lucas, B.C.S., México</li>
              <li>
                <a href="mailto:hola@simplyfreshcabo.com" className="hover:text-green-300 transition-colors">
                  hola@simplyfreshcabo.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/526241234567" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-green-500/40">
            &copy; {new Date().getFullYear()} Simply Fresh Cabo.{" "}
            {t(locale, { es: "Todos los derechos reservados.", en: "All rights reserved." })}
          </p>
          <p className="text-xs text-green-500/40">
            {t(locale, {
              es: "Cultivado con cariño en Cabo San Lucas",
              en: "Grown with care in Cabo San Lucas",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
