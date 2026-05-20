"use client";

import Image from "next/image";
import { useLanguage, t } from "@/context/LanguageContext";

export default function Desert() {
  const { locale } = useLanguage();

  const problems = [
    {
      num: "01",
      title: t(locale, { es: "Suelo árido y salino", en: "Arid, salty soil" }),
      desc: t(locale, {
        es: "La tierra desértica de Cabo no retiene nutrientes suficientes para cultivos de calidad.",
        en: "Cabo's desert soil doesn't retain enough nutrients for quality crops.",
      }),
    },
    {
      num: "02",
      title: t(locale, { es: "Agua, el recurso más escaso", en: "Water, the scarcest resource" }),
      desc: t(locale, {
        es: "El agua en la península es limitada. La agricultura tradicional la desperdicia en exceso.",
        en: "Water on the peninsula is limited. Traditional agriculture wastes it excessively.",
      }),
    },
    {
      num: "03",
      title: t(locale, { es: "Logística larga", en: "Long logistics chain" }),
      desc: t(locale, {
        es: "El producto llega desde el centro del país después de días en transporte, perdiendo frescura y nutrientes.",
        en: "Produce arrives from central Mexico after days in transit, losing freshness and nutrients.",
      }),
    },
  ];

  return (
    <section id="desert" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {t(locale, {
              es: "Cabo es desierto. El suelo no estaba hecho para la agricultura.",
              en: "Cabo is desert. The soil wasn't made for agriculture.",
            })}
          </h2>
          <p className="mt-5 text-base text-gray-500 leading-relaxed">
            {t(locale, {
              es: "Por eso tu producto pasa días viajando desde el interior del país. Llega cansado, sin sabor, y con una huella de carbono enorme. Nosotros cambiamos eso.",
              en: "That's why your produce travels for days from inland. It arrives tired, flavorless, and with a huge carbon footprint. We're changing that.",
            })}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Problems list */}
          <div className="space-y-8">
            {problems.map((p) => (
              <div key={p.num} className="flex gap-5">
                <span className="text-3xl font-bold text-green-600/30 leading-none shrink-0">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop"
              alt={t(locale, { es: "Sistema hidropónico", en: "Hydroponic system" })}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
