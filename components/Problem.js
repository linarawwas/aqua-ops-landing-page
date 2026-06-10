"use client";

import { useLang } from "./LanguageProvider";

export function Problem() {
  const { t, tHtml } = useLang();

  return (
    <section className="problem section-pad" id="problem">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">{t("prob_eyebrow")}</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            {t("prob_head")}
          </h2>
          <p className="lead">{t("prob_lead")}</p>
        </div>

        <div className="problem-grid">
          <article className="pcard reveal">
            <div className="picon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M8 4h9a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                <path d="M9 9h7M9 13h7M9 17h4" strokeLinecap="round" />
              </svg>
            </div>
            <h3>{t("p1_t")}</h3>
            <p>{t("p1_d")}</p>
          </article>

          <article className="pcard reveal d1">
            <div className="picon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>{t("p2_t")}</h3>
            <p>{t("p2_d")}</p>
          </article>

          <article className="pcard reveal d2">
            <div className="picon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M3 8l9-5 9 5v8l-9 5-9-5V8Z" />
                <path d="M3 8l9 5 9-5M12 13v8" strokeLinecap="round" />
              </svg>
            </div>
            <h3>{t("p3_t")}</h3>
            <p>{t("p3_d")}</p>
          </article>

          <article className="pcard reveal">
            <div className="picon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path
                  d="M5 12.5a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0M12 19.5h.01"
                  strokeLinecap="round"
                />
                <path d="M3 3l18 18" strokeLinecap="round" />
              </svg>
            </div>
            <h3>{t("p4_t")}</h3>
            <p>{t("p4_d")}</p>
          </article>

          <article className="pcard reveal d1">
            <div className="picon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path
                  d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>{t("p5_t")}</h3>
            <p>{t("p5_d")}</p>
          </article>

          {/* emphasis cell */}
          <article
            className="pcard reveal d2"
            style={{
              borderInlineStartColor: "var(--navy)",
              background: "linear-gradient(160deg,#fff,#F1F6FD)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              className="picon"
              style={{ background: "rgba(27,58,107,.08)" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                stroke="var(--navy)"
              >
                <path
                  d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              style={{ color: "var(--navy)" }}
              dangerouslySetInnerHTML={tHtml("prob_kicker")}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
