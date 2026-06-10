"use client";

import { useLang } from "./LanguageProvider";

export function Features() {
  const { t } = useLang();

  return (
    <>
      <div id="features"></div>

      {/* Feature 1 — light, mockup right */}
      <section className="feature light feat-mockup-right">
        <div className="wrap feat-inner">
          <div className="feat-copy reveal">
            <span className="eyebrow">{t("f1_tag")}</span>
            <h3 className="feat-h">{t("f1_head")}</h3>
            <p className="body">{t("f1_body")}</p>
          </div>
          <div className="feat-stage reveal d1">
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen ui">
                <div className="ui-appbar tall">
                  <div>
                    <div className="t">{t("m_driver_title")}</div>
                    <div className="s">{t("fm1_offline")}</div>
                  </div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,.6)"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 12.5a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0M12 19.5h.01M3 3l18 18"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="ui-body">
                  <div
                    className="ui-card"
                    style={{
                      background: "rgba(245,158,11,.08)",
                      borderColor: "rgba(245,158,11,.35)",
                    }}
                  >
                    <div className="ui-row">
                      <span className="pill pill-amber">
                        <i className="led"></i>
                        <span>{t("fm1_status_pending")}</span>
                      </span>
                      <span
                        className="ui-strong ui-num"
                        style={{ color: "#B45309", fontSize: 20 }}
                      >
                        3
                      </span>
                    </div>
                    <div className="ui-label" style={{ marginTop: 8 }}>
                      {t("fm1_records")}
                    </div>
                  </div>
                  <div className="ui-list">
                    <div className="ui-list-item">
                      <div className="ic">📦</div>
                      <div className="grow">
                        <div className="name">مطعم الحي</div>
                        <div className="meta">٤ قوارير · $16</div>
                      </div>
                      <span className="pill pill-amber">⏳</span>
                    </div>
                    <div className="ui-list-item">
                      <div className="ic">📦</div>
                      <div className="grow">
                        <div className="name">كافيه المنطقة</div>
                        <div className="meta">٢ قارورة · 8M</div>
                      </div>
                      <span className="pill pill-amber">⏳</span>
                    </div>
                    <div className="ui-list-item">
                      <div className="ic">📦</div>
                      <div className="grow">
                        <div className="name">سوبرماركت المدينة</div>
                        <div className="meta">٦ قوارير · $24</div>
                      </div>
                      <span className="pill pill-amber">⏳</span>
                    </div>
                  </div>
                  <div className="ui-btn">{t("fm1_sync_btn")}</div>
                  <div
                    className="ui-row"
                    style={{ justifyContent: "center", gap: 7 }}
                  >
                    <span className="pill pill-green">
                      <i className="led"></i>
                      <span>{t("fm1_synced")}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 — dark, mockup left */}
      <section className="feature dark">
        <div className="wrap feat-inner">
          <div className="feat-stage reveal">
            <div className="tablet">
              <div className="tablet-screen ui">
                <div className="ui-appbar">
                  <div>
                    <div className="t">{t("fm2_title")}</div>
                    <div className="s">{t("fm2_rate")}</div>
                  </div>
                  <div className="ui-avatar">A</div>
                </div>
                <div
                  className="ui-body"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 11 }}
                >
                  <div className="ui-card">
                    <div className="ui-label">{t("fm2_usd")}</div>
                    <div
                      className="ui-strong ui-num"
                      style={{ fontSize: 24, color: "var(--navy)" }}
                    >
                      $1,284
                    </div>
                  </div>
                  <div className="ui-card">
                    <div className="ui-label">{t("fm2_lbp")}</div>
                    <div
                      className="ui-strong ui-num"
                      style={{ fontSize: 24, color: "var(--navy)" }}
                    >
                      114.9M
                    </div>
                  </div>
                  <div className="ui-card" style={{ gridColumn: "span 2" }}>
                    <div className="ui-row" style={{ marginBottom: 10 }}>
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
                      <div className="bar usd" style={{ height: "40%" }}></div>
                      <div className="bar lbp" style={{ height: "58%" }}></div>
                      <div className="bar usd" style={{ height: "66%" }}></div>
                      <div className="bar lbp" style={{ height: "50%" }}></div>
                      <div className="bar usd" style={{ height: "82%" }}></div>
                      <div className="bar lbp" style={{ height: "72%" }}></div>
                      <div className="bar usd" style={{ height: "60%" }}></div>
                      <div className="bar lbp" style={{ height: "90%" }}></div>
                    </div>
                  </div>
                  <div
                    className="ui-card"
                    style={{
                      gridColumn: "span 2",
                      padding: 0,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="ui-row"
                      style={{
                        padding: "10px 13px",
                        background: "var(--slate-100)",
                      }}
                    >
                      <span className="ui-label">{t("fm2_area")}</span>
                      <span className="ui-label">{t("fm2_revenue")}</span>
                    </div>
                    <div className="ui-row" style={{ padding: "9px 13px" }}>
                      <span style={{ fontSize: 12.5, fontWeight: 600 }}>
                        المدينة
                      </span>
                      <span className="ui-num" style={{ fontSize: 12.5 }}>
                        $420 · 37.6M
                      </span>
                    </div>
                    <div
                      className="ui-row"
                      style={{
                        padding: "9px 13px",
                        background: "var(--slate-100)",
                      }}
                    >
                      <span style={{ fontSize: 12.5, fontWeight: 600 }}>
                        الضواحي
                      </span>
                      <span className="ui-num" style={{ fontSize: 12.5 }}>
                        $315 · 28.2M
                      </span>
                    </div>
                    <div className="ui-row" style={{ padding: "9px 13px" }}>
                      <span style={{ fontSize: 12.5, fontWeight: 600 }}>
                        الريف
                      </span>
                      <span className="ui-num" style={{ fontSize: 12.5 }}>
                        $549 · 49.1M
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feat-copy reveal d1">
            <span className="eyebrow on-dark">{t("f2_tag")}</span>
            <h3 className="feat-h">{t("f2_head")}</h3>
            <p className="body">{t("f2_body")}</p>
          </div>
        </div>
      </section>

      {/* Feature 3 — light, mockup right */}
      <section className="feature light feat-mockup-right">
        <div className="wrap feat-inner">
          <div className="feat-copy reveal">
            <span className="eyebrow">{t("f3_tag")}</span>
            <h3 className="feat-h">{t("f3_head")}</h3>
            <p className="body">{t("f3_body")}</p>
          </div>
          <div className="feat-stage reveal d1">
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen ui">
                <div className="ui-appbar tall">
                  <div>
                    <div className="t">{t("fm3_profile")}</div>
                    <div className="s">#C-١٤٢</div>
                  </div>
                  <div
                    className="ui-avatar"
                    style={{ background: "var(--navy)", color: "#fff" }}
                  >
                    م
                  </div>
                </div>
                <div className="ui-body">
                  <div className="ui-card" style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 16,
                        color: "var(--navy)",
                      }}
                    >
                      مطعم الحي
                    </div>
                    <div className="ui-label" style={{ marginTop: 3 }}>
                      المنطقة التجارية
                    </div>
                  </div>
                  <div
                    className="ui-card"
                    style={{
                      background: "linear-gradient(150deg,#ECFBFF,#DDF3FE)",
                      borderColor: "#BAE6FD",
                      textAlign: "center",
                    }}
                  >
                    <div className="ui-label">{t("fm3_holding")}</div>
                    <div
                      className="ui-strong ui-num"
                      style={{
                        fontSize: 34,
                        color: "var(--cyan-deep)",
                        lineHeight: 1.1,
                      }}
                    >
                      23
                    </div>
                    <div className="ui-label">{t("fm3_bottles")}</div>
                    <div className="pill pill-cyan" style={{ marginTop: 8 }}>
                      {t("fm3_max")}
                    </div>
                  </div>
                  <div className="ui-row ui-card">
                    <span className="ui-label">{t("fm3_balance")}</span>
                    <span
                      className="ui-strong ui-num"
                      style={{ color: "var(--navy)" }}
                    >
                      $48 · 4.3M
                    </span>
                  </div>
                  <div className="ui-label" style={{ textAlign: "center" }}>
                    {t("fm3_last")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4 — dark, mockup left */}
      <section className="feature dark">
        <div className="wrap feat-inner">
          <div className="feat-stage reveal">
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen ui">
                <div className="ui-appbar tall">
                  <div>
                    <div className="t">{t("m_admin_title")}</div>
                    <div className="s">٢:٠٠ مساءً · مباشر</div>
                  </div>
                  <span className="pill pill-green">
                    <i className="led"></i>LIVE
                  </span>
                </div>
                <div className="ui-body">
                  <div className="ui-card">
                    <div className="ui-row" style={{ marginBottom: 9 }}>
                      <span className="ui-label">{t("fm4_progress")}</span>
                      <span
                        className="ui-strong"
                        style={{ color: "var(--cyan-deep)" }}
                      >
                        67%
                      </span>
                    </div>
                    <div className="ui-progress">
                      <i style={{ width: "67%" }}></i>
                    </div>
                    <div className="ui-label" style={{ marginTop: 8 }}>
                      {t("fm4_delivered")}
                    </div>
                  </div>
                  <div className="ui-card">
                    <div className="ui-label" style={{ marginBottom: 9 }}>
                      {t("fm4_drivers")}
                    </div>
                    <div className="ui-list">
                      <div
                        className="ui-list-item"
                        style={{ padding: "7px 10px" }}
                      >
                        <div
                          className="ui-avatar"
                          style={{ width: 26, height: 26, fontSize: 11 }}
                        >
                          أ
                        </div>
                        <div className="grow">
                          <div className="name">سائق أ</div>
                        </div>
                        <span className="pill pill-green">٨/١٤</span>
                      </div>
                      <div
                        className="ui-list-item"
                        style={{ padding: "7px 10px" }}
                      >
                        <div
                          className="ui-avatar"
                          style={{
                            width: 26,
                            height: 26,
                            fontSize: 11,
                            background: "var(--navy)",
                            color: "#fff",
                          }}
                        >
                          ب
                        </div>
                        <div className="grow">
                          <div className="name">سائق ب</div>
                        </div>
                        <span className="pill pill-amber">٥/١٢</span>
                      </div>
                    </div>
                  </div>
                  <div className="ui-row ui-card">
                    <span className="ui-label">{t("fm4_revenue")}</span>
                    <span
                      className="ui-strong ui-num"
                      style={{ color: "var(--navy)" }}
                    >
                      $612 · 54.8M
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feat-copy reveal d1">
            <span className="eyebrow on-dark">{t("f4_tag")}</span>
            <h3 className="feat-h">{t("f4_head")}</h3>
            <p className="body">{t("f4_body")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
