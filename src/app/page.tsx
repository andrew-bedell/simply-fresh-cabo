"use client";

import { useState, useEffect, ReactNode, FormEvent } from "react";
import { CONTENT, type Lang, type Copy } from "@/content";

// ─── Helpers ──────────────────────────────────────────────────
function bold(str: string): ReactNode[] {
  const parts = str.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p));
}

// ─── Wordmark ─────────────────────────────────────────────────
function Wordmark({ inverse }: { inverse?: boolean }) {
  return (
    <a href="#top" className="soc-wordmark" data-inverse={inverse ? "1" : ""}>
      <span className="soc-wm-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="28" height="28">
          <circle cx="16" cy="16" r="15" fill="currentColor" opacity=".12" />
          <path d="M16 4c4 4 7 8 7 13a7 7 0 1 1-14 0c0-5 3-9 7-13z" fill="currentColor" />
          <path d="M16 9v14M12 14l4 3M20 14l-4 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </svg>
      </span>
      <span className="soc-wm-text">
        <span className="soc-wm-1">Simply Fresh</span>
        <span className="soc-wm-2">Cabo</span>
      </span>
    </a>
  );
}

// ─── Lang Toggle ──────────────────────────────────────────────
function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="soc-lang" role="group" aria-label="Language">
      <button className={lang === "es" ? "is-on" : ""} onClick={() => setLang("es")}>ES</button>
      <button className={lang === "en" ? "is-on" : ""} onClick={() => setLang("en")}>EN</button>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────
function Nav({ t, lang, setLang }: { t: Copy; lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={`m-nav soc-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="m-nav-inner">
        <Wordmark />
        <div className="m-nav-links soc-nav-links">
          <a href="#problema">{t.nav.problema}</a>
          <a href="#solucion">{t.nav.solucion}</a>
          <a href="#clientes">{lang === "es" ? "Para quién" : "Who it's for"}</a>
          <a href="#planes">{t.nav.planes}</a>
          <a href="#fundador">{t.nav.fundador}</a>
        </div>
        <div className="m-nav-cta-row">
          <LangToggle lang={lang} setLang={setLang} />
          <a href="#contacto" className="m-btn-cta m-btn-green">{t.nav.cta}</a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero({ t, lang }: { t: Copy; lang: Lang }) {
  return (
    <header id="top" className="m-hero soc-hero">
      <div className="m-hero-dots" />
      <div className="m-hero-inner">
        <div className="m-hero-split">
          <div className="m-hero-copy">
            <span className="m-hero-tag">{t.hero.tag}</span>
            <h1 className="t-hero m-hero-h1">
              {t.hero.h1a}<span className="t-hero-em">{t.hero.h1em}</span>{t.hero.h1b}
            </h1>
            <p className="m-hero-sub">{bold(t.hero.sub)}</p>
            <div className="m-hero-ctas">
              <a href="#planes" className="m-btn-cta m-btn-green m-btn-lg">
                {t.hero.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#solucion" className="m-btn-outline-light">{t.hero.ctaSecondary}</a>
            </div>
            <p className="m-hero-fine">{t.hero.fine}</p>
          </div>
          <div className="soc-hero-art">
            <div className="m-hero-photo soc-hero-photo">
              <img src="/assets/photos/broccoli.jpg" alt={t.hero.photoCaption} />
              <div className="soc-hero-photo-caption">{t.hero.photoCaption}</div>
            </div>
            <div className="soc-hero-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11z" /></svg>
              <div>
                <div className="soc-hero-badge-num">95%</div>
                <div className="soc-hero-badge-lbl">{lang === "es" ? "menos agua" : "less water"}</div>
              </div>
            </div>
            <div className="soc-hero-stamp">
              <span>{lang === "es" ? "Cosechado en" : "Grown in"}</span>
              <strong>Los Cabos · BCS</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Trust Strip ──────────────────────────────────────────────
function Trust({ t }: { t: Copy }) {
  return (
    <section className="m-trust soc-trust">
      <div className="m-trust-inner">
        {t.trust.map((s, i) => (
          <div className="m-trust-item" key={i}>
            <div className="m-trust-num">{s.num}</div>
            <div className="m-trust-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section Head ─────────────────────────────────────────────
function SectionHead({ eyebrow, title, sub, light }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className={`soc-section-head ${light ? "is-light" : ""}`}>
      <span className="t-eyebrow">{eyebrow}</span>
      <h2 className="t-h1 soc-section-title">{title}</h2>
      {sub && <p className="soc-section-sub">{sub}</p>}
    </div>
  );
}

// ─── Problem ──────────────────────────────────────────────────
function Problem({ t }: { t: Copy }) {
  return (
    <section id="problema" className="m-section soc-problem">
      <div className="m-section-inner">
        <SectionHead eyebrow={t.problem.eyebrow} title={t.problem.title} sub={t.problem.sub} />
        <div className="soc-problem-grid">
          <div className="soc-problem-photo">
            <img src="/assets/photos/founder-shovel.jpg" alt="" />
            <div className="soc-problem-photo-tag">
              <span className="soc-bullet" />
              {t.problem.eyebrow === "El reto" ? "Suelo árido de Cabo" : "Cabo's arid soil"}
            </div>
          </div>
          <ol className="soc-problem-list">
            {t.problem.points.map((p, i) => (
              <li key={i}>
                <div className="soc-problem-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="soc-problem-h">{p.h}</h3>
                  <p className="soc-problem-p">{p.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ─── Solution ─────────────────────────────────────────────────
const SOLUTION_ICONS = [
  <path key="0" d="M9 3h6v3l-1 14h-4L9 6V3zm0 6h6m-6 4h6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />,
  <path key="1" d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z" fill="currentColor" />,
  <path key="2" d="M4 18l5-6 4 4 7-9M14 7h6v6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="3" d="M12 21c0-6 4-12 10-12-1 8-5 12-10 12zM4 12c2-2 5-3 8-3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
];

function Solution({ t, lang }: { t: Copy; lang: Lang }) {
  return (
    <section id="solucion" className="m-section m-section--alt soc-solution">
      <div className="m-section-inner">
        <SectionHead eyebrow={t.solution.eyebrow} title={t.solution.title} sub={t.solution.sub} light />
        <div className="soc-solution-grid">
          <div className="soc-solution-hero">
            <img src="/assets/photos/tower-lit.jpg" alt="" />
            <div className="soc-solution-hero-overlay">
              <div className="soc-solution-hero-tag">
                {lang === "es" ? "Torre hidropónica vertical" : "Vertical hydroponic tower"}
              </div>
              <div className="soc-solution-hero-stat">
                <div>
                  <div className="soc-stat-num">28</div>
                  <div className="soc-stat-lbl">{lang === "es" ? "días" : "days"}</div>
                </div>
                <div className="soc-stat-sep" />
                <div>
                  <div className="soc-stat-num">2.5m</div>
                  <div className="soc-stat-lbl">{lang === "es" ? "altura" : "tall"}</div>
                </div>
                <div className="soc-stat-sep" />
                <div>
                  <div className="soc-stat-num">44</div>
                  <div className="soc-stat-lbl">{lang === "es" ? "plantas" : "plants"}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="soc-solution-features">
            {t.solution.features.map((f, i) => (
              <div key={i} className="soc-feature">
                <div className="soc-feature-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22">{SOLUTION_ICONS[i]}</svg>
                </div>
                <div>
                  <h3 className="soc-feature-h">{f.h}</h3>
                  <p className="soc-feature-p">{f.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Products ─────────────────────────────────────────────────
const PRODUCT_VISUALS = [
  { bg: "#F0FDF4", fg: "#15803D" }, { bg: "#FEF2F2", fg: "#B91C1C" },
  { bg: "#FAF5FF", fg: "#7E22CE" }, { bg: "#FFF7ED", fg: "#C2410C" },
  { bg: "#ECFEFF", fg: "#0E7490" }, { bg: "#FEF3C7", fg: "#B45309" },
  { bg: "#F0FDF4", fg: "#166534" }, { bg: "#FDF2F8", fg: "#BE185D" },
];

const GLYPHS: Record<string, ReactNode> = {
  lettuce: <g><path d="M32 12c-12 0-22 8-22 18 0 12 10 22 22 22s22-10 22-22c0-10-10-18-22-18z" opacity=".25"/><path d="M32 14c-6 4-12 10-12 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/><path d="M32 14c6 4 12 10 12 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/><path d="M32 14v20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/><path d="M16 34c4 10 14 16 16 16s12-6 16-16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g>,
  tomato: <g><path d="M32 18c-12 0-20 8-20 18s8 16 20 16 20-6 20-16-8-18-20-18z"/><path d="M26 18c0-4 2-7 6-8 4 1 6 4 6 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/><path d="M22 14l4 4M42 14l-4 4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g>,
  onion: <g><path d="M32 18c-9 0-16 8-16 18s7 16 16 16 16-6 16-16-7-18-16-18z"/><path d="M32 18c-2-5 0-8 0-10M32 18c2-5 6-7 6-10M32 18c-2-5-6-7-6-10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M22 28c2 8 4 16 10 22M42 28c-2 8-4 16-10 22" stroke="#fff" strokeWidth="1.4" fill="none" opacity=".6"/></g>,
  habanero: <g><path d="M20 24c0-6 4-10 12-10 14 0 22 14 20 28-2 10-10 14-18 12-8-2-14-10-14-20v-10z"/><path d="M30 14c0-3 1-5 4-5s4 2 4 4M28 12l-3-3M36 9l3-3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g>,
  cucumber: <g><rect x="14" y="20" width="36" height="22" rx="11" transform="rotate(-12 32 31)"/><path d="M22 26l4 2M30 24l4 2M38 22l4 2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".6"/></g>,
  pepper: <g><path d="M22 24c0-6 4-10 10-10s10 4 10 10v8c0 12-6 18-10 18s-10-6-10-18v-8z"/><path d="M28 14c0-4 2-6 4-6s4 2 4 4M32 8l-2-2M32 8l2-2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g>,
  cilantro: <g><circle cx="32" cy="20" r="6"/><circle cx="22" cy="28" r="5"/><circle cx="42" cy="28" r="5"/><circle cx="26" cy="38" r="4"/><circle cx="38" cy="38" r="4"/><circle cx="32" cy="32" r="5"/><path d="M32 38v14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></g>,
  radish: <g><circle cx="32" cy="36" r="14"/><path d="M32 22V8M28 14l4-4 4 4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M32 50l-2 6M32 50l2 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".5"/></g>,
};
const GLYPH_KEYS = ["lettuce", "tomato", "onion", "habanero", "cucumber", "pepper", "cilantro", "radish"];

function Products({ t }: { t: Copy }) {
  return (
    <section id="productos" className="m-section soc-products">
      <div className="m-section-inner">
        <SectionHead eyebrow={t.products.eyebrow} title={t.products.title} sub={t.products.sub} />
        <div className="soc-products-grid">
          {t.products.items.map((p, i) => {
            const v = PRODUCT_VISUALS[i];
            return (
              <div className="soc-product" key={i} style={{ background: v.bg, color: v.fg }}>
                <div className="soc-product-glyph">
                  <svg viewBox="0 0 64 64" width="64" height="64" fill="currentColor">{GLYPHS[GLYPH_KEYS[i]]}</svg>
                </div>
                <div className="soc-product-body">
                  <div className="soc-product-name">{p.name}</div>
                  <div className="soc-product-note">{p.note}</div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="soc-products-foot">{t.products.footer}</p>
      </div>
    </section>
  );
}

// ─── How We Grow ──────────────────────────────────────────────
function HowWeGrow({ t }: { t: Copy }) {
  const photos = ["/assets/photos/seedling-tray.jpg", "/assets/photos/tray-seedlings.jpg", "/assets/photos/lettuce-tower.jpg"];
  return (
    <section className="m-section m-section--alt soc-how">
      <div className="m-section-inner">
        <SectionHead eyebrow={t.how.eyebrow} title={t.how.title} sub={t.how.sub} light />
        <div className="soc-how-grid">
          {t.how.steps.map((s, i) => (
            <div key={i} className="soc-how-step">
              <div className="soc-how-photo">
                <img src={photos[i]} alt="" />
                <span className="soc-how-num">{s.n}</span>
              </div>
              <h3 className="soc-how-h">{s.h}</h3>
              <p className="soc-how-p">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Customers ────────────────────────────────────────────────
function Customers({ t, lang }: { t: Copy; lang: Lang }) {
  return (
    <section id="clientes" className="m-section soc-customers">
      <div className="m-section-inner">
        <SectionHead eyebrow={t.customers.eyebrow} title={t.customers.title} sub={t.customers.sub} />
        <div className="soc-customers-grid">
          <div className="soc-customers-hero">
            <img src="/assets/photos/tower-harvest.jpg" alt="" />
            <div className="soc-customers-hero-overlay">
              <span className="t-eyebrow soc-customers-eyebrow">{t.customers.forCardEyebrow}</span>
              <h3 className="soc-customers-h">{t.customers.forCardTitle}</h3>
              <p className="soc-customers-p">{t.customers.forCardP}</p>
              <div className="soc-customers-badges">
                <span className="soc-customers-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z" /></svg>
                  {lang === "es" ? "Calidad premium" : "Premium quality"}
                </span>
                <span className="soc-customers-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l3-9 3 7 3-9 3 12 3-6 3 5" /></svg>
                  {lang === "es" ? "Familias en Cabo" : "Cabo families"}
                </span>
              </div>
            </div>
          </div>
          <div className="soc-customers-problems">
            <div className="soc-customers-problems-h">{lang === "es" ? "Lo que resolvemos:" : "What we solve:"}</div>
            <ul>
              {t.customers.problems.map((p, i) => (
                <li key={i}>
                  <div className="soc-customers-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <div className="soc-customers-ph">{p.h}</div>
                    <div className="soc-customers-pp">{p.p}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="soc-customers-also">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18V8h4V5h10v3h4v10H3zm5-10h8V6H8v2z" /></svg>
              <span>{t.customers.alsoServe}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Plans ────────────────────────────────────────────────────
function Plans({ t, lang }: { t: Copy; lang: Lang }) {
  return (
    <section id="planes" className="m-section m-section--alt soc-plans">
      <div className="m-section-inner">
        <SectionHead eyebrow={t.plans.eyebrow} title={t.plans.title} sub={t.plans.sub} light />
        <div className="soc-plans-includes">
          <div className="soc-plans-includes-h">{t.plans.includes}</div>
          <div className="soc-plans-includes-grid">
            {t.plans.includesItems.map((it, i) => (
              <div key={i} className="soc-plans-includes-item">
                <span className="soc-plans-includes-dot" />
                {it}
              </div>
            ))}
          </div>
        </div>
        <div className="soc-plans-grid">
          {t.plans.cards.map((c, i) => (
            <div key={i} className={`soc-plan ${c.featured ? "is-featured" : ""}`}>
              {c.featured && <div className="soc-plan-pop">{lang === "es" ? "RECOMENDADO" : "RECOMMENDED"}</div>}
              <div className="soc-plan-head">
                <div className="soc-plan-tag">{c.tag}</div>
                <div className="soc-plan-name">{c.name}</div>
              </div>
              <div className="soc-plan-price-row">
                <span className="soc-plan-price">{c.price}</span>
                <span className="soc-plan-unit">{c.unit}</span>
              </div>
              {c.badge && (
                <div className="soc-plan-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 4 5 1-3.5 3.5L17 16l-5-3-5 3 1.5-5.5L5 7l5-1z" /></svg>
                  {c.badge}
                </div>
              )}
              {c.firstWeek && <div className="soc-plan-first">{c.firstWeek}</div>}
              <ul className="soc-plan-features">
                {c.features.map((f, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`m-btn-cta m-btn-lg ${c.featured ? "m-btn-green" : "soc-btn-outline"} m-btn-block`}>
                {c.cta}
              </a>
              <p className="soc-plan-fine">{c.fine}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Founder ──────────────────────────────────────────────────
function Founder({ t, lang }: { t: Copy; lang: Lang }) {
  return (
    <section id="fundador" className="m-section soc-founder">
      <div className="m-section-inner">
        <div className="soc-founder-grid">
          <div className="soc-founder-photo">
            <img src="/assets/photos/founder-water.jpg" alt="Alex Rodríguez" />
            <div className="soc-founder-photo-card">
              <div className="soc-founder-name">Alex Rodríguez</div>
              <div className="soc-founder-role">{lang === "es" ? "Fundador · Ingeniero Agrónomo" : "Founder · Agricultural Engineer"}</div>
            </div>
          </div>
          <div className="soc-founder-copy">
            <span className="t-eyebrow">{t.founder.eyebrow}</span>
            <h2 className="t-h1 soc-founder-title">{t.founder.title}</h2>
            <p>{t.founder.p1}</p>
            <p>{t.founder.p2}</p>
            <p>{t.founder.p3}</p>
            <p className="soc-founder-p-quote">{t.founder.p4}</p>
            <div className="soc-founder-stats">
              {t.founder.stats.map((s, i) => (
                <div key={i}>
                  <div className="soc-founder-stat-num">{s.num}</div>
                  <div className="soc-founder-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Strip ────────────────────────────────────────────────
function CtaStrip({ t }: { t: Copy }) {
  return (
    <section className="m-cta soc-cta">
      <div className="m-cta-inner">
        <h2 className="m-cta-h t-h1--serif">{t.cta.h}</h2>
        <p className="m-cta-sub">{t.cta.sub}</p>
        <div className="m-hero-ctas">
          <a href="https://wa.me/5216241234567" className="m-btn-cta m-btn-green m-btn-lg" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h13l5 4V6a2 2 0 0 0-2-2z" /></svg>
            {t.cta.btnWhatsapp}
          </a>
          <a href="#contacto" className="m-btn-outline-light">{t.cta.btnEmail}</a>
        </div>
        <p className="m-hero-fine">{t.cta.fine}</p>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────
function Contact({ t, lang }: { t: Copy; lang: Lang }) {
  const [form, setForm] = useState({ name: "", business: "", whatsapp: "", email: "", notes: "", items: [] as string[] });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const toggleItem = (n: string) => setForm(f => ({
    ...f, items: f.items.includes(n) ? f.items.filter(x => x !== n) : [...f.items, n]
  }));
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 900);
  };
  return (
    <section id="contacto" className="m-section m-section--alt soc-contact">
      <div className="m-section-inner">
        <div className="soc-contact-grid">
          <div className="soc-contact-copy">
            <span className="t-eyebrow">{t.contact.eyebrow}</span>
            <h2 className="t-h1 soc-contact-title">{t.contact.title}</h2>
            <p className="soc-contact-sub">{t.contact.sub}</p>
            <div className="soc-contact-channels">
              <a href="https://wa.me/5216241234567" className="soc-channel soc-channel--wa" target="_blank" rel="noopener">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h13l5 4V6a2 2 0 0 0-2-2z" /></svg>
                <div>
                  <div className="soc-channel-h">WhatsApp</div>
                  <div className="soc-channel-v">+52 624 123 4567</div>
                </div>
              </a>
              <a href="mailto:hola@simplyfreshcabo.mx" className="soc-channel">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                <div>
                  <div className="soc-channel-h">Email</div>
                  <div className="soc-channel-v">hola@simplyfreshcabo.mx</div>
                </div>
              </a>
              <div className="soc-channel">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                <div>
                  <div className="soc-channel-h">{lang === "es" ? "Granja" : "Farm"}</div>
                  <div className="soc-channel-v">San José del Cabo, BCS</div>
                </div>
              </div>
            </div>
          </div>
          <form className="soc-contact-form" onSubmit={onSubmit}>
            <div className="soc-form-row">
              <label className="m-field">
                <span className="m-field-label">{t.contact.fields.name}<span className="req">*</span></span>
                <input className="m-form-input" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </label>
              <label className="m-field">
                <span className="m-field-label">{t.contact.fields.business}<span className="req">*</span></span>
                <input className="m-form-input" required value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} />
              </label>
            </div>
            <div className="soc-form-row">
              <label className="m-field">
                <span className="m-field-label">{t.contact.fields.whatsapp}<span className="req">*</span></span>
                <div className="m-input-prefix">
                  <span className="m-input-prefix-label">🇲🇽 +52</span>
                  <input type="tel" required value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} />
                </div>
              </label>
              <label className="m-field">
                <span className="m-field-label">{t.contact.fields.email}</span>
                <input className="m-form-input" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </label>
            </div>
            <div className="m-field">
              <span className="m-field-label">{t.contact.fields.items}</span>
              <div className="soc-chip-row">
                {t.products.items.map((p, i) => (
                  <button type="button" key={i}
                    className={`soc-chip ${form.items.includes(p.name) ? "is-on" : ""}`}
                    onClick={() => toggleItem(p.name)}>
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
            <label className="m-field">
              <span className="m-field-label">{t.contact.fields.notes}</span>
              <textarea className="m-form-input" rows={3} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
            </label>
            <button type="submit" className="m-btn-cta m-btn-green m-btn-lg m-btn-block" disabled={status !== "idle"}>
              {status === "sending" ? t.contact.submitting : status === "success" ? "✓ " + t.contact.success : t.contact.submit}
            </button>
            <p className="soc-form-privacy">{t.contact.privacy}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function FooterSection({ t }: { t: Copy }) {
  return (
    <footer className="m-footer soc-footer">
      <div className="m-footer-inner">
        <div>
          <Wordmark inverse />
          <p className="m-footer-tag">{t.footer.tag}</p>
        </div>
        <div className="m-footer-cols">
          <div>
            <div className="m-footer-h">{t.footer.colA}</div>
            {t.footer.links.a.map((l, i) => <a key={i} href="#productos">{l}</a>)}
          </div>
          <div>
            <div className="m-footer-h">{t.footer.colB}</div>
            {t.footer.links.b.map((l, i) => <a key={i} href="#fundador">{l}</a>)}
          </div>
          <div>
            <div className="m-footer-h">{t.footer.colC}</div>
            {t.footer.links.c.map((l, i) => <a key={i} href="#contacto">{l}</a>)}
          </div>
        </div>
      </div>
      <div className="m-footer-bottom">{t.footer.copy}</div>
    </footer>
  );
}

// ─── WhatsApp Float ───────────────────────────────────────────
function WhatsappFloat() {
  return (
    <a href="https://wa.me/5216241234567" className="soc-wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4 0-.2 0-.3-.1-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3z M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
      </svg>
    </a>
  );
}

// ─── App ──────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const copy = CONTENT[lang];

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--brand-green", "#16A34A");
    r.style.setProperty("--brand-green-dark", "#15803D");
    r.style.setProperty("--soc-gold", "#F0C040");
    r.style.setProperty("--soc-coral", "#E76F51");
    r.style.setProperty("--soc-tag", "rgba(22,163,74,.16)");
  }, []);

  return (
    <>
      <Nav t={copy} lang={lang} setLang={setLang} />
      <Hero t={copy} lang={lang} />
      <Trust t={copy} />
      <Problem t={copy} />
      <Solution t={copy} lang={lang} />
      <Customers t={copy} lang={lang} />
      <Products t={copy} />
      <HowWeGrow t={copy} />
      <Plans t={copy} lang={lang} />
      <Founder t={copy} lang={lang} />
      <CtaStrip t={copy} />
      <Contact t={copy} lang={lang} />
      <FooterSection t={copy} />
      <WhatsappFloat />
    </>
  );
}
