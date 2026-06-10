"use client";

import { useLang } from "./LanguageProvider";

export function HowItWorks() {
  const { t } = useLang();

  const steps = [
    { n: "01", t: "s1_t", d: "s1_d", delay: "" },
    { n: "02", t: "s2_t", d: "s2_d", delay: "d1" },
    { n: "03", t: "s3_t", d: "s3_d", delay: "d2" },
    { n: "04", t: "s4_t", d: "s4_d", delay: "d3" },
  ];

  return (
    <section className="how section-pad" id="how">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">{t("how_eyebrow")}</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            {t("how_head")}
          </h2>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.n} className={`step reveal ${s.delay}`.trim()}>
              <div className="num">
                <span>{s.n}</span>
              </div>
              <h3>{t(s.t)}</h3>
              <p>{t(s.d)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
