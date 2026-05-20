"use client";

import Image from "next/image";
import { useLanguage, t } from "@/context/LanguageContext";

export default function Founder() {
  const { locale } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Name and title */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Max Rodríguez –{" "}
              <span className="text-green-700">
                {t(locale, { es: "Ingeniero Agrónomo", en: "Agricultural Engineer" })}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Bio image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=625&fit=crop&crop=face"
                alt="Max Rodríguez"
                fill
                className="object-cover"
              />
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                {t(locale, {
                  es: "Mi camino en la agricultura empezó en la Universidad del Noroeste, donde me especialicé en sistemas de cultivo sustentable. Después de 8 años trabajando en proyectos agrícolas en Sonora y Sinaloa, decidí traer lo que aprendí al lugar donde quería vivir: Los Cabos.",
                  en: "My path in agriculture began at Universidad del Noroeste, where I specialized in sustainable farming systems. After 8 years working on agricultural projects in Sonora and Sinaloa, I decided to bring what I learned to the place I wanted to live: Los Cabos.",
                })}
              </p>
              <p>
                {t(locale, {
                  es: "Fundé Simply Fresh con una convicción simple: Cabo merece producto fresco de verdad. No el que viaja días desde el interior, sino el que se cosecha hoy y llega a tu mesa hoy.",
                  en: "I founded Simply Fresh with a simple conviction: Cabo deserves truly fresh produce. Not the kind that travels for days from inland, but the kind harvested today and on your table today.",
                })}
              </p>
              <p>
                {t(locale, {
                  es: "Después de meses de pruebas y desarrollo, hoy nuestras torres hidropónicas producen más de 30 variedades de vegetales, hierbas y hortalizas, todo el año, sin pesticidas, usando 90% menos agua que la agricultura tradicional.",
                  en: "After months of testing and development, today our hydroponic towers produce over 30 varieties of vegetables, herbs, and greens, year-round, without pesticides, using 90% less water than traditional agriculture.",
                })}
              </p>
              <p>
                {t(locale, {
                  es: "Mi objetivo es que la gente de Cabo confiemos la palabra 'fresco'. Que cuando abras tu canasta semanal, sepas de dónde viene cada hoja, cada tomate, cada rama de cilantro.",
                  en: "My goal is for people in Cabo to trust the word 'fresh'. So when you open your weekly basket, you know where every leaf, every tomato, every sprig of cilantro comes from.",
                })}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-4 border-t border-gray-200 mt-6">
                <div>
                  <p className="text-xl font-bold text-green-800">25+</p>
                  <p className="text-xs text-gray-500">
                    {t(locale, { es: "Años de experiencia", en: "Years of experience" })}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold text-green-800">30+</p>
                  <p className="text-xs text-gray-500">
                    {t(locale, { es: "Variedades cultivadas", en: "Varieties grown" })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
