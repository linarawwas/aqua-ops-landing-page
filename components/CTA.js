"use client";

import { useLang } from "./LanguageProvider";
import { waLink } from "./dictionary";

export function CTA() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <section className="cta section-pad" id="contact">
      <div className="cta-glow"></div>
      <div className="hero-bg">
        <div className="hero-grid"></div>
      </div>
      <div className="wrap">
        <h2 className="h-section reveal">
          {t("cta_head").replace("{year}", year)}
        </h2>
        <p className="lead reveal d1">{t("cta_sub")}</p>
        <div className="cta-form reveal d2" style={{ justifyContent: "center" }}>
          <a
            className="btn btn-primary btn-lg"
            href={waLink(lang, "access")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cta_btn")}
          </a>
        </div>
        <p className="cta-note reveal d2">{t("cta_note")}</p>
      </div>
    </section>
  );
}
