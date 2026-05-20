"use client";

import { useState } from "react";
import { useLanguage, t } from "@/context/LanguageContext";

export default function Pricing() {
  const { locale } = useLanguage();
  const [tab, setTab] = useState<"flexible" | "prepaid">("flexible");

  const plans = [
    {
      name: t(locale, { es: "Suscripción semanal", en: "Weekly Subscription" }),
      price: "$100",
      period: t(locale, { es: "/semana", en: "/week" }),
      highlight: true,
      features: [
        t(locale, { es: "Canasta semanal de temporada", en: "Seasonal weekly basket" }),
        t(locale, { es: "8-10 variedades frescas", en: "8-10 fresh varieties" }),
        t(locale, { es: "Entrega a domicilio gratis", en: "Free home delivery" }),
        t(locale, { es: "Cancela cuando quieras", en: "Cancel anytime" }),
        t(locale, { es: "Prioridad en cosecha", en: "Harvest priority" }),
      ],
      cta: t(locale, { es: "Suscríbirte por WhatsApp", en: "Subscribe via WhatsApp" }),
    },
    {
      name: t(locale, { es: "Canasta única", en: "Single Basket" }),
      price: "$150",
      period: t(locale, { es: "/canasta", en: "/basket" }),
      highlight: false,
      features: [
        t(locale, { es: "Canasta única de temporada", en: "Single seasonal basket" }),
        t(locale, { es: "8-10 variedades frescas", en: "8-10 fresh varieties" }),
        t(locale, { es: "Entrega a domicilio", en: "Home delivery" }),
        t(locale, { es: "Sin compromiso", en: "No commitment" }),
        t(locale, { es: "Ideal para probar", en: "Great for trying" }),
      ],
      cta: t(locale, { es: "Ordenar por WhatsApp", en: "Order via WhatsApp" }),
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t(locale, {
              es: "Tu canasta orgánica, cada semana.",
              en: "Your organic basket, every week.",
            })}
          </h2>
          <p className="mt-4 text-base text-gray-500">
            {t(locale, {
              es: "Cada entrega adentro con lo mejor que cosechamos. Fresco y a precio justo.",
              en: "Each delivery packed with the best we harvest. Fresh and fairly priced.",
            })}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setTab("flexible")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                tab === "flexible"
                  ? "bg-green-800 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t(locale, { es: "Pago flexible", en: "Flexible Pay" })}
            </button>
            <button
              onClick={() => setTab("prepaid")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                tab === "prepaid"
                  ? "bg-green-800 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t(locale, { es: "Pago anticipado", en: "Prepaid" })}
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-green-900 text-white ring-2 ring-green-500"
                  : "bg-gray-50 text-gray-900 border border-gray-200"
              }`}
            >
              <p
                className={`text-sm font-medium mb-4 ${
                  plan.highlight ? "text-green-300" : "text-gray-500"
                }`}
              >
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlight ? "text-green-300" : "text-gray-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`w-4 h-4 shrink-0 ${
                        plan.highlight ? "text-green-400" : "text-green-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.highlight ? "text-green-100" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/526241234567"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-full text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-green-500 text-white hover:bg-green-400"
                    : "bg-white text-green-900 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
