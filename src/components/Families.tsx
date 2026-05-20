"use client";

import Image from "next/image";
import { useLanguage, t } from "@/context/LanguageContext";

export default function Families() {
  const { locale } = useLanguage();

  const benefits = [
    t(locale, { es: "Sin químicos prohibidos en tu mesa", en: "No banned chemicals on your table" }),
    t(locale, { es: "Más información sobre el origen", en: "More info about the origin" }),
    t(locale, { es: "Cosecha fresca cada semana", en: "Fresh harvest every week" }),
    t(locale, { es: "Envase probablemente reciclable", en: "Likely recyclable packaging" }),
    t(locale, { es: "Cero producto importado", en: "Zero imported produce" }),
    t(locale, { es: "Producto de sabor auténtico", en: "Authentic-tasting produce" }),
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text + Image */}
          <div>
            <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">
              {t(locale, { es: "Para quienes exigen más", en: "For those who demand more" })}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              {t(locale, {
                es: "Pensado para familias que no se conforman.",
                en: "Designed for families that don't settle.",
              })}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              {t(locale, {
                es: "Si te importa lo que comes y lo que sirves a tu familia, te entendemos. De la frescura a la trazabilidad, de lo orgánico a lo sustentable, tu canasta habla de tus valores.",
                en: "If you care about what you eat and what you serve your family, we understand. From freshness to traceability, from organic to sustainable, your basket speaks to your values.",
              })}
            </p>

            {/* Image with overlay */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=500&fit=crop"
                alt={t(locale, { es: "Familia con producto fresco", en: "Family with fresh produce" })}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-lg leading-snug">
                  {t(locale, {
                    es: "Familias en Cabo que eligen vivir sano, vivir real.",
                    en: "Families in Cabo choosing to live healthy, live real.",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Benefits grid */}
          <div className="lg:pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
                >
                  <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
