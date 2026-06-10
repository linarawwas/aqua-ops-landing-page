"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";
import { LogoMark } from "./LogoMark";

export function Navbar() {
  const { t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label="AquaOps">
          <LogoMark />
          <span className="wordmark">
            Aqua<span className="ops">Ops</span>
          </span>
        </a>

        <nav className="nav-links">
          <a className="nav-link" href="#features">
            {t("nav_features")}
          </a>
          <a className="nav-link" href="#how">
            {t("nav_how")}
          </a>
          <a className="nav-link" href="#pricing">
            {t("nav_pricing")}
          </a>
          <a className="nav-link" href="#contact">
            {t("nav_contact")}
          </a>
        </nav>

        <div className="nav-right">
          <button
            className="lang-toggle"
            onClick={toggle}
            aria-label="Switch language"
          >
            <svg
              className="globe"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
                strokeLinecap="round"
              />
            </svg>
            <span>{t("lang_label")}</span>
          </button>
          <a className="btn btn-primary" href="#contact">
            {t("nav_demo")}
          </a>
        </div>
      </div>
    </header>
  );
}
