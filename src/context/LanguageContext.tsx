"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Locale = "es" | "en";

interface LanguageContextType {
  locale: Locale;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "es",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  const toggle = () => setLocale((l) => (l === "es" ? "en" : "es"));
  return (
    <LanguageContext.Provider value={{ locale, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function t(
  locale: Locale,
  translations: Record<Locale, string>,
): string {
  return translations[locale];
}
