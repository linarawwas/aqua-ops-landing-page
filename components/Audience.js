"use client";

import { useLang } from "./LanguageProvider";

function Check() {
  return (
    <span className="chk">
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="3">
        <path d="M5 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Audience() {
  const { t } = useLang();
  const driverFeats = ["ad1", "ad2", "ad3", "ad4"];
  const ownerFeats = ["ao1", "ao2", "ao3", "ao4"];

  return (
    <section className="audience section-pad">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">{t("aud_eyebrow")}</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            {t("aud_head")}
          </h2>
        </div>
        <div className="aud-grid">
          <article className="aud-card driver reveal">
            <div className="aud-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" />
                <path
                  d="M12 3v6M12 15v6M3 12h6M15 12h6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>{t("aud_driver_title")}</h3>
            <ul className="aud-feats">
              {driverFeats.map((k) => (
                <li key={k}>
                  <Check />
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="aud-card owner reveal d1">
            <div className="aud-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="8" height="8" rx="1.5" />
                <rect x="13" y="3" width="8" height="5" rx="1.5" />
                <rect x="13" y="10" width="8" height="11" rx="1.5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" />
              </svg>
            </div>
            <h3>{t("aud_owner_title")}</h3>
            <ul className="aud-feats">
              {ownerFeats.map((k) => (
                <li key={k}>
                  <Check />
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
