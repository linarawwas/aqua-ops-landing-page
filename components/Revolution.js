"use client";

import { useLang } from "./LanguageProvider";

export function Revolution() {
  const { t } = useLang();

  return (
    <section className="revolution section-pad" id="pricing">
      <div className="rev-glow"></div>
      <div className="wrap">
        <h2 className="rev-h reveal">{t("rev_h1")}</h2>
        <p
          className="rev-ends-line reveal d1"
          style={{
            fontSize: "clamp(28px,4.5vw,56px)",
            fontWeight: 800,
            color: "var(--cyan)",
            marginTop: 6,
            letterSpacing: "-.02em",
          }}
        >
          {t("rev_ends")}
        </p>
        <p className="rev-body reveal d1">{t("rev_body")}</p>
        <div className="rev-divider reveal"></div>
        <div className="rev-stats">
          <div className="rev-stat reveal">
            <div className="big ui-num">
              3,000<span className="cyan">+</span>
            </div>
            <div className="lbl">{t("rev_s1")}</div>
          </div>
          <div className="rev-stat reveal d1">
            <div className="big ui-num">2</div>
            <div className="lbl">{t("rev_s2")}</div>
          </div>
          <div className="rev-stat reveal d2">
            <div className="big ui-num">0</div>
            <div className="lbl">{t("rev_s3")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
