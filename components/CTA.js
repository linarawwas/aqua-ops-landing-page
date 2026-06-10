"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { I18N } from "./dictionary";

export function CTA() {
  const { t, lang } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section className="cta section-pad" id="contact">
      <div className="cta-glow"></div>
      <div className="hero-bg">
        <div className="hero-grid"></div>
      </div>
      <div className="wrap">
        <h2 className="h-section reveal">{t("cta_head")}</h2>
        <p className="lead reveal d1">{t("cta_sub")}</p>
        <form className="cta-form reveal d2" onSubmit={onSubmit}>
          <input
            className="cta-input"
            type="email"
            required
            placeholder={t("cta_ph")}
          />
          <button type="submit" className="btn btn-primary btn-lg">
            {t("cta_btn")}
          </button>
        </form>
        <p
          className="cta-note reveal d2"
          style={submitted ? { color: "var(--cyan)" } : undefined}
        >
          {submitted ? I18N.cta_thanks[lang] : t("cta_note")}
        </p>
      </div>
    </section>
  );
}
