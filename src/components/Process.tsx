"use client";

import Image from "next/image";
import { useLanguage, t } from "@/context/LanguageContext";

export default function Process() {
  const { locale } = useLanguage();

  const steps = [
    {
      title: t(locale, { es: "Semilla en nuestro huerto", en: "Seeds in our nursery" }),
      desc: t(locale, {
        es: "Seleccionamos las mejores semillas orgánicas y las germinamos en condiciones controladas.",
        en: "We select the best organic seeds and germinate them in controlled conditions.",
      }),
      img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop",
    },
    {
      title: t(locale, { es: "Transplante a la torre", en: "Transplant to the tower" }),
      desc: t(locale, {
        es: "Las plántulas pasan a nuestras torres hidropónicas donde crecen con agua y nutrientes.",
        en: "Seedlings move to our hydroponic towers where they grow with water and nutrients.",
      }),
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=500&fit=crop",
    },
    {
      title: t(locale, { es: "Cosecha y entrega", en: "Harvest and delivery" }),
      desc: t(locale, {
        es: "Cosechamos el mismo día de tu entrega. Del huerto a tu puerta en horas.",
        en: "We harvest the same day as your delivery. From farm to door in hours.",
      }),
      img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=500&fit=crop",
    },
    {
      title: t(locale, { es: "En tu cocina", en: "In your kitchen" }),
      desc: t(locale, {
        es: "Producto ultra fresco listo para preparar. Más sabor, más nutrientes, más vida.",
        en: "Ultra-fresh produce ready to prepare. More flavor, more nutrients, more life.",
      }),
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t(locale, {
              es: "De la semilla a tu cocina en pocas semanas.",
              en: "From seed to your kitchen in a few weeks.",
            })}
          </h2>
          <p className="mt-4 text-base text-gray-500">
            {t(locale, {
              es: "Una línea corta desde el huerto hasta tu hogar en Cabo. Simple, limpio, directo.",
              en: "A short line from the garden to your home in Cabo. Simple, clean, direct.",
            })}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-green-800">
                    {i + 1}
                  </span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
