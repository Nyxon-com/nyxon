import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { copy, isLang, type Lang } from "./copy";
import { isDesignPage, isServerPage } from "../data/site";

const STORAGE = "nyxon.lang";

function storedLang() {
  try {
    return localStorage.getItem(STORAGE);
  } catch {
    return null;
  }
}

export function readLang(): Lang {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (isLang(query)) return query;
  const saved = storedLang();
  if (isLang(saved)) return saved;
  return "en";
}

type Context = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof copy)["it"];
};

const LanguageContext = createContext<Context | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE, next);
    } catch {
      /* la scelta resta solo per questa pagina */
    }
    const params = new URLSearchParams(window.location.search);
    params.set("lang", next);
    const query = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}?${query}${window.location.hash}`);
  }

  useEffect(() => {
    const text = copy[lang];
    const title = isServerPage() ? text.serverPageTitle : isDesignPage() ? text.designPageTitle : text.pageTitle;
    try {
      localStorage.setItem(STORAGE, lang);
    } catch {
      /* la lingua resta nell’indirizzo */
    }
    document.documentElement.lang = lang;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", text.meta);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", text.meta);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", text.locale);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: copy[lang] }}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useI18n");
  return value;
}
