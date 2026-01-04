"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "@/translations";

export type Language = "en" | "te" | "es" | "zh" | "ja" | "fr" | "de";

export const languageNames: Record<Language, string> = {
  en: "English",
  te: "తెలుగు",
  es: "Español",
  zh: "中文",
  ja: "日本語",
  fr: "Français",
  de: "Deutsch",
};

export const languageFlags: Record<Language, string> = {
  en: "EN",
  te: "TE",
  es: "ES",
  zh: "中",
  ja: "日",
  fr: "FR",
  de: "DE",
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];
    for (const k of keys) {
      if (value === undefined || value === null) return key;
      if (Array.isArray(value)) {
        value = value[parseInt(k, 10)];
      } else {
        value = (value as Record<string, unknown>)?.[k];
      }
    }
    return (value as string) ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
