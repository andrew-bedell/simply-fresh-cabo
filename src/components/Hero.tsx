"use client";

import Image from "next/image";
import { useLanguage, t } from "@/context/LanguageContext";

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section className="relative pt-16 bg-green-900 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?w=1600&h=900&fit=crop"
          alt="Hydroponic produce"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/80 to-green-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="text-xs font-medium text-green-200 uppercase tracking-wider">
              {t(locale, {
                es: "Cosechado en Cabo · Sin químicos · Todo orgánico",
                en: "Harvested in Cabo · Chemical-free · 100% Organic",
              })}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {t(locale, {
              es: "Producto fresco, cosechado hoy.",
              en: "Fresh produce, harvested today.",
            })}
          </h1>

          <p className="mt-6 text-lg text-green-100/80 leading-relaxed max-w-lg">
            {t(locale, {
              es: "Canasta orgánica semanal entregada directo a tu cocina en Cabo. Cultivado en nuestras torres hidropónicas, de la tierra a tu mesa en horas.",
              en: "Weekly organic basket delivered straight to your kitchen in Cabo. Grown in our hydroponic towers, from farm to table in hours.",
            })}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition-colors text-sm"
            >
              {t(locale, { es: "Suscríbete ahora", en: "Subscribe Now" })}
            </a>
            <a
              href="#towers"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              {t(locale, { es: "Conoce nuestras torres", en: "See Our Towers" })}
            </a>
          </div>

          <p className="mt-6 text-sm text-green-300/60">
            {t(locale, {
              es: "Entrega disponible en: Cabo San Lucas, San José del Cabo",
              en: "Delivery available in: Cabo San Lucas, San José del Cabo",
            })}
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
            {[
              {
                value: "400+",
                label: t(locale, { es: "Canastas entregadas", en: "Baskets delivered" }),
              },
              {
                value: "30+",
                label: t(locale, { es: "Variedades cultivadas", en: "Varieties grown" }),
              },
              {
                value: "98%",
                label: t(locale, { es: "Clientes satisfechos", en: "Satisfied customers" }),
              },
              {
                value: "4.9",
                label: t(locale, { es: "Calificación promedio", en: "Average rating" }),
              },
            ].map((stat) => (
              <div key={stat.value} className="py-5 px-4 sm:px-6 text-center">
                <p className="text-2xl font-bold text-green-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
