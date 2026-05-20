"use client";

import Image from "next/image";
import { useLanguage, t } from "@/context/LanguageContext";

export default function Towers() {
  const { locale } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      ),
      title: t(locale, { es: "Cultivo vertical, sin tierra", en: "Vertical growing, no soil" }),
      desc: t(locale, {
        es: "Nuestras torres producen hasta 10x más por metro cuadrado que un huerto convencional.",
        en: "Our towers produce up to 10x more per square meter than a conventional garden.",
      }),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: t(locale, { es: "Cosechamos a 5 min de tu casa", en: "Harvested 5 min from your home" }),
      desc: t(locale, {
        es: "Nuestra granja está en Cabo. Tu producto no viaja miles de kilómetros.",
        en: "Our farm is in Cabo. Your produce doesn't travel thousands of kilometers.",
      }),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: t(locale, { es: "Cero residuos tóxicos", en: "Zero toxic residue" }),
      desc: t(locale, {
        es: "Sin pesticidas, sin herbicidas, sin fungicidas. Solo agua, luz y nutrientes naturales.",
        en: "No pesticides, no herbicides, no fungicides. Just water, light, and natural nutrients.",
      }),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      title: t(locale, { es: "Sabe a recién cosechado", en: "Tastes freshly picked" }),
      desc: t(locale, {
        es: "Porque lo es. Cosechamos el mismo día que entregamos a tu puerta.",
        en: "Because it is. We harvest the same day we deliver to your door.",
      }),
    },
  ];

  const stats = [
    { value: "5x", label: t(locale, { es: "Más rendimiento", en: "More yield" }) },
    { value: "90%", label: t(locale, { es: "Menos agua", en: "Less water" }) },
    { value: "44", label: t(locale, { es: "Torres activas", en: "Active towers" }) },
  ];

  return (
    <section id="towers" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">
          {t(locale, { es: "Nuestra tecnología", en: "Our Technology" })}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-12">
          {t(locale, {
            es: "Torres hidropónicas, aquí en Cabo.",
            en: "Hydroponic towers, right here in Cabo.",
          })}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=533&fit=crop"
                  alt={t(locale, { es: "Torre hidropónica", en: "Hydroponic tower" })}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=400&h=533&fit=crop"
                  alt={t(locale, { es: "Plantas creciendo", en: "Plants growing" })}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 pt-2">
              {stats.map((s) => (
                <div key={s.value} className="flex items-center gap-2">
                  <span className="text-xl font-bold text-green-800">{s.value}</span>
                  <span className="text-xs text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="space-y-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-green-200 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-700 shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
