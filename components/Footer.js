"use client";

import { useLang } from "./LanguageProvider";
import { LogoMark } from "./LogoMark";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a className="brand" href="#top">
              <LogoMark drop="var(--cyan)" line="var(--navy-deeper)" />
              <span className="wordmark">
                Aqua<span className="ops">Ops</span>
              </span>
            </a>
            <p className="footer-tag">{t("foot_tag")}</p>
          </div>
          <nav className="footer-links">
            <a href="#features">{t("nav_features")}</a>
            <a href="#how">{t("nav_how")}</a>
            <a href="#pricing">{t("nav_pricing")}</a>
            <a href="#contact">{t("nav_contact")}</a>
          </nav>
          <div className="footer-built">
            <span className="flag">🇱🇧</span>
            <span>{t("foot_built")}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t("foot_copy").replace("{year}", year)}</span>
          <div className="footer-links">
            <a href="#">{t("foot_priv")}</a>
            <a href="#">{t("foot_terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
