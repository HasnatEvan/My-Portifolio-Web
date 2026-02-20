import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);
const LANGUAGE_KEY = "portfolio-language";

const getByPath = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

const getInitialLanguage = () => {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  return saved === "bn" ? "bn" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.setAttribute("lang", language === "bn" ? "bn" : "en");
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  const t = (path) => {
    const current = getByPath(translations[language], path);
    if (current !== undefined) return current;
    return getByPath(translations.en, path);
  };

  const value = useMemo(
    () => ({
      language,
      isBangla: language === "bn",
      toggleLanguage,
      t,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return context;
};

