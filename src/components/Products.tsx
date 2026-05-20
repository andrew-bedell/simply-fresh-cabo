"use client";

import Image from "next/image";
import { useLanguage, t } from "@/context/LanguageContext";

const products = [
  {
    es: "Lechuga",
    en: "Lettuce",
    img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop",
    bg: "bg-green-50",
  },
  {
    es: "Tomate",
    en: "Tomato",
    img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=300&fit=crop",
    bg: "bg-red-50",
  },
  {
    es: "Cebolla",
    en: "Onion",
    img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300&h=300&fit=crop",
    bg: "bg-yellow-50",
  },
  {
    es: "Habanero",
    en: "Habanero",
    img: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=300&h=300&fit=crop",
    bg: "bg-orange-50",
  },
  {
    es: "Pepino",
    en: "Cucumber",
    img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop",
    bg: "bg-lime-50",
  },
  {
    es: "Hierbabuena",
    en: "Spearmint",
    img: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&h=300&fit=crop",
    bg: "bg-emerald-50",
  },
  {
    es: "Cilantro",
    en: "Cilantro",
    img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=300&h=300&fit=crop",
    bg: "bg-green-50",
  },
  {
    es: "Rábano",
    en: "Radish",
    img: "https://images.unsplash.com/photo-1585369396752-3ae6dae74e8b?w=300&h=300&fit=crop",
    bg: "bg-pink-50",
  },
];

export default function Products() {
  const { locale } = useLanguage();

  return (
    <section id="products" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t(locale, {
              es: "Producto fresco para tu cocina, todo el año.",
              en: "Fresh produce for your kitchen, all year round.",
            })}
          </h2>
          <p className="mt-4 text-base text-gray-500">
            {t(locale, {
              es: "Cosechamos lo que el clima y la tecnología nos permiten. Lo que ves aquí es real: sale de nuestra granja. Disponible para restaurantes y familias.",
              en: "We grow what climate and technology allow. What you see here is real: it comes from our farm. Available for restaurants and families.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p) => (
            <div
              key={p.es}
              className={`${p.bg} rounded-2xl p-4 flex flex-col items-center text-center group hover:shadow-md transition-shadow`}
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3">
                <Image
                  src={p.img}
                  alt={locale === "es" ? p.es : p.en}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm font-semibold text-gray-800">
                {locale === "es" ? p.es : p.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
