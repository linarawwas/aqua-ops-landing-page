"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { I18N } from "./dictionary";

const STORE_KEY = "aquaops_lang";
const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  // Default is Arabic so SSR markup matches the first client render (no hydration mismatch).
  const [lang, setLang] = useState("ar");

  // Read the saved preference after mount.
  useEffect(() => {
    let saved = "ar";
    try {
      saved = localStorage.getItem(STORE_KEY) || "ar";
    } catch (e) {}
    setLang(saved);
  }, []);

  // Reflect language on <html> (lang + dir) and persist.
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch (e) {}
  }, [lang]);

  const t = useCallback(
    (key) => (I18N[key] ? I18N[key][lang] ?? "" : ""),
    [lang]
  );

  // For strings that contain inline markup (e.g. <span class="cyan">…</span>).
  const tHtml = useCallback(
    (key) => ({ __html: I18N[key] ? I18N[key][lang] ?? "" : "" }),
    [lang]
  );

  const toggle = useCallback(
    () => setLang((prev) => (prev === "ar" ? "en" : "ar")),
    []
  );

  return (
    <LangContext.Provider value={{ lang, t, tHtml, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
