"use client";

import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", fontFamily: "var(--font-sans), -apple-system, sans-serif" }}>
      <header style={{ background: "#fff", borderBottom: "1px solid #e3e3e3", padding: "16px 0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <svg viewBox="0 0 32 32" width="28" height="28">
              <circle cx="16" cy="16" r="15" fill="#DAF0D8" />
              <path d="M16 4c4 4 7 8 7 13a7 7 0 1 1-14 0c0-5 3-9 7-13z" fill="#2E7D32" />
              <path d="M16 9v14M12 14l4 3M20 14l-4 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            </svg>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#1E293B" }}>Simply Fresh Cabo</span>
          </a>
        </div>
      </header>

      <main style={{
        maxWidth: 600, margin: "0 auto", padding: "80px 20px",
        textAlign: "center",
        opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%", background: "#f0fdf4",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px",
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1a1a1a", margin: "0 0 8px" }}>
          Thank you for your order!
        </h1>
        <p style={{ fontSize: 16, color: "#707070", margin: "0 0 32px", lineHeight: 1.6 }}>
          We've received your order and will begin preparing your fresh organic basket.
          You'll receive a confirmation email shortly with delivery details.
        </p>

        <div style={{
          background: "#fff", border: "1px solid #e3e3e3", borderRadius: 12,
          padding: 24, marginBottom: 32, textAlign: "left",
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: "0 0 16px" }}>What happens next?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { step: "1", title: "Order confirmed", desc: "We've received your order and payment." },
              { step: "2", title: "Harvest day", desc: "We harvest your produce fresh from our hydroponic towers." },
              { step: "3", title: "Delivery", desc: "Your basket arrives at your door within 24 hours of harvest." },
            ].map((s) => (
              <div key={s.step} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", background: "#f0fdf4",
                  color: "#16A34A", fontWeight: 700, fontSize: 13,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a1a" }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "#707070", marginTop: 2 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/"
            style={{
              padding: "14px 28px", background: "#16A34A", color: "#fff",
              fontSize: 15, fontWeight: 700, border: "none", borderRadius: 8,
              textDecoration: "none", display: "inline-block",
            }}
          >
            Back to home
          </a>
          <a
            href="https://wa.me/573208867710"
            target="_blank"
            rel="noopener"
            style={{
              padding: "14px 28px", background: "#fff", color: "#1a1a1a",
              fontSize: 15, fontWeight: 600, border: "1px solid #d9d9d9", borderRadius: 8,
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4 0-.2 0-.3-.1-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3z M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
            </svg>
            Questions? WhatsApp us
          </a>
        </div>
      </main>
    </div>
  );
}
