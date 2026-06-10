"use client";

import { useLang } from "./LanguageProvider";

export function Hero() {
  const { t, tHtml } = useLang();

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow two"></div>
      </div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="eyebrow on-dark reveal">{t("hero_eyebrow")}</span>
          <h1
            className="h-display reveal d1"
            dangerouslySetInnerHTML={tHtml("hero_h1")}
          />
          <p className="lead reveal d2">{t("hero_lead")}</p>
          <div className="hero-ctas reveal d3">
            <a className="btn btn-primary btn-lg" href="#features">
              {t("hero_cta1")}
            </a>
            <a className="btn btn-outline btn-lg" href="#contact">
              {t("hero_cta2")}
            </a>
          </div>
          <div className="hero-trust reveal d4">
            <span>
              <i className="dot"></i>
              <span>{t("hero_trust1")}</span>
            </span>
            <span>
              <i className="dot"></i>
              <span>{t("hero_trust2")}</span>
            </span>
            <span>
              <i className="dot"></i>
              <span>{t("hero_trust3")}</span>
            </span>
          </div>
        </div>

        {/* Hero mockup stage */}
        <div className="hero-stage reveal d2">
          <div className="hero-compose">
            {/* Tablet: admin dashboard */}
            <div
              className="tablet float-anim slow"
              style={{
                position: "absolute",
                insetInlineStart: 0,
                insetBlockStart: 18,
              }}
            >
              <div className="tablet-screen ui">
                <div className="ui-appbar">
                  <div>
                    <div className="t">{t("m_admin_title")}</div>
                    <div className="s">{t("m_admin_sub")}</div>
                  </div>
                  <div className="ui-avatar">A</div>
                </div>
                <div
                  className="ui-body"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 10 }}
                >
                  <div className="ui-card">
                    <div className="ui-label">{t("fm2_usd")}</div>
                    <div
                      className="ui-strong ui-num"
                      style={{ fontSize: 22, color: "var(--navy)" }}
                    >
                      $1,284.50
                    </div>
                    <span
                      className="pill pill-green"
                      style={{ marginTop: 7 }}
                    >
                      <i className="led"></i>+12%
                    </span>
                  </div>
                  <div className="ui-card">
                    <div className="ui-label">{t("fm2_lbp")}</div>
                    <div
                      className="ui-strong ui-num"
                      style={{ fontSize: 22, color: "var(--navy)" }}
                    >
                      114.9M
                    </div>
                    <span className="pill pill-cyan" style={{ marginTop: 7 }}>
                      90,000
                    </span>
                  </div>
                  <div className="ui-card" style={{ gridColumn: "span 2" }}>
                    <div className="ui-row" style={{ marginBottom: 8 }}>
                      <span className="ui-label">{t("fm2_month")}</span>
                      <span className="chart-legend">
                        <span>
                          <i style={{ background: "var(--navy)" }}></i>USD
                        </span>
                        <span>
                          <i style={{ background: "var(--cyan)" }}></i>LBP
                        </span>
                      </span>
                    </div>
                    <div className="chart">
                      <div className="bar usd" style={{ height: "46%" }}></div>
                      <div className="bar lbp" style={{ height: "62%" }}></div>
                      <div className="bar usd" style={{ height: "70%" }}></div>
                      <div className="bar lbp" style={{ height: "54%" }}></div>
                      <div className="bar usd" style={{ height: "88%" }}></div>
                      <div className="bar lbp" style={{ height: "76%" }}></div>
                      <div className="bar usd" style={{ height: "64%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone: driver route, overlapping */}
            <div
              className="phone float-anim"
              style={{
                position: "absolute",
                insetInlineEnd: 0,
                insetBlockEnd: 0,
                zIndex: 7,
              }}
            >
              <div className="phone-notch"></div>
              <div className="phone-screen ui">
                <div className="ui-appbar tall">
                  <div>
                    <div className="t">{t("m_driver_title")}</div>
                    <div className="s">{t("m_driver_sub")}</div>
                  </div>
                  <span className="pill pill-amber">
                    <i className="led"></i>
                    <span>{t("m_stop")}</span>
                  </span>
                </div>
                <div className="ui-body">
                  <div
                    className="ui-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      background: "rgba(245,158,11,.08)",
                      borderColor: "rgba(245,158,11,.3)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B45309"
                      strokeWidth="2"
                    >
                      <path d="M12 3v9l5 3" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                    <span
                      style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "#B45309",
                      }}
                    >
                      {t("m_pending")}
                    </span>
                  </div>
                  <div className="ui-list">
                    <div className="ui-list-item">
                      <div className="ic">💧</div>
                      <div className="grow">
                        <div className="name">سوبرماركت الحي</div>
                        <div className="meta">الحي · ٦ قوارير</div>
                      </div>
                      <span className="pill pill-green">
                        <i className="led"></i>✓
                      </span>
                    </div>
                    <div className="ui-list-item">
                      <div className="ic">💧</div>
                      <div className="grow">
                        <div className="name">مطعم المنطقة</div>
                        <div className="meta">وسط المدينة · ٤ قوارير</div>
                      </div>
                      <span className="pill pill-green">✓</span>
                    </div>
                    <div
                      className="ui-list-item"
                      style={{
                        boxShadow: "inset 0 0 0 1.5px var(--cyan)",
                        background: "#fff",
                      }}
                    >
                      <div
                        className="ic"
                        style={{ background: "var(--cyan)", color: "#fff" }}
                      >
                        💧
                      </div>
                      <div className="grow">
                        <div className="name">صيدلية الشارع</div>
                        <div className="meta">الضواحي · ٣ قوارير</div>
                      </div>
                      <span className="pill pill-cyan">التالي</span>
                    </div>
                  </div>
                  <div className="ui-card ui-row">
                    <span className="ui-label">{t("m_collected")}</span>
                    <span
                      className="ui-strong ui-num"
                      style={{ color: "var(--navy)" }}
                    >
                      $184 · 12.4M
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* floating mini card */}
            <div
              className="float-card float-anim"
              style={{
                insetBlockStart: -6,
                insetInlineEnd: 40,
                zIndex: 9,
                display: "flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <span className="pill pill-green">
                <i className="led"></i>
              </span>
              <span
                style={{ color: "#fff", fontSize: 12.5, fontWeight: 600 }}
              >
                {t("fc_synced")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* wave */}
      <div className="wave bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
          <path
            d="M0,40 C360,75 720,5 1080,28 C1260,40 1380,55 1440,50 L1440,70 L0,70 Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
