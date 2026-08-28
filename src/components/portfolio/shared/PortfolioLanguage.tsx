"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { CONTENT, type Language, type PortfolioContent } from "./data";

type PortfolioLanguageContext = {
  language: Language;
  content: PortfolioContent;
  toggleLanguage: () => void;
};

const Context = createContext<PortfolioLanguageContext | null>(null);

const subscribeLanguage = (onStoreChange: () => void) => {
  window.addEventListener("portfolio-language-change", onStoreChange);
  return () => window.removeEventListener("portfolio-language-change", onStoreChange);
};
const readLanguageCookie = (): Language =>
  document.cookie.split("; ").find((cookie) => cookie.startsWith("portfolio-language="))?.split("=")[1] === "jp"
    ? "jp"
    : "en";

export function PortfolioLanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  const language = useSyncExternalStore(subscribeLanguage, readLanguageCookie, () => initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "jp" ? "ja" : "en";
  }, [language]);

  const toggleLanguage = () => {
    const next = language === "en" ? "jp" : "en";
    document.cookie = `portfolio-language=${next}; max-age=31536000; path=/; samesite=lax`;
    window.dispatchEvent(new Event("portfolio-language-change"));
  };

  return (
    <Context.Provider value={{ language, content: CONTENT[language], toggleLanguage }}>
      {children}
    </Context.Provider>
  );
}

export function usePortfolioLanguage() {
  const context = useContext(Context);
  if (!context) throw new Error("usePortfolioLanguage must be used within PortfolioLanguageProvider");
  return context;
}
