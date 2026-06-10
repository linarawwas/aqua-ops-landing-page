"use client";

import { useLang } from "./LanguageProvider";
import { LogoMark } from "./LogoMark";

export function Solution() {
  const { t } = useLang();

  return (
    <section className="dark-band section-pad" id="solution">
      <div className="hero-bg">
        <div className="hero-grid"></div>
      </div>
      <div className="wrap solution-intro">
        <span className="eyebrow on-dark reveal">{t("sol_eyebrow")}</span>
        <h2 className="h-section reveal d1">{t("sol_head")}</h2>
        <p className="lead reveal d2">{t("sol_sub")}</p>
        <div className="solution-logo reveal d3">
          <div className="ring float-anim">
            <LogoMark drop="var(--cyan)" line="#fff" />
          </div>
        </div>
      </div>
    </section>
  );
}
