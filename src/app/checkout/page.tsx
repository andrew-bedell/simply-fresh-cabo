"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PLANS = [
  {
    id: "weekly",
    name: "Weekly Subscription",
    price: 100,
    unit: "/week",
    desc: "Organic basket delivered weekly. Pause or cancel anytime.",
  },
  {
    id: "single",
    name: "Single Basket",
    price: 150,
    unit: "one-time",
    desc: "Try our organic basket with no commitment.",
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [plan, setPlan] = useState("weekly");
  const [loading, setLoading] = useState(false);
  const selected = PLANS.find((p) => p.id === plan)!;

  const [form, setForm] = useState({
    email: "john@example.com",
    firstName: "John",
    lastName: "Smith",
    address: "123 Ocean View Dr",
    city: "Cabo San Lucas",
    state: "BCS",
    zip: "23450",
    country: "Mexico",
    phone: "+1 (555) 123-4567",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with Stripe checkout session creation
    // await fetch("/api/checkout", { method: "POST", body: JSON.stringify({ plan, ...form }) });
    setTimeout(() => {
      router.push("/thank-you");
    }, 1200);
  };

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", fontFamily: "var(--font-sans), -apple-system, sans-serif" }}>
      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e3e3e3", padding: "16px 0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <svg viewBox="0 0 32 32" width="28" height="28">
              <circle cx="16" cy="16" r="15" fill="#DAF0D8" />
              <path d="M16 4c4 4 7 8 7 13a7 7 0 1 1-14 0c0-5 3-9 7-13z" fill="#2E7D32" />
              <path d="M16 9v14M12 14l4 3M20 14l-4 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            </svg>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#1E293B" }}>Simply Fresh Cabo</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#707070" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            Secure checkout
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 20px 80px" }}>
        <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 32, alignItems: "start" }}>
          {/* Left: Form */}
          <div>
            {/* Plan selection */}
            <Section title="Select your plan">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {PLANS.map((p) => (
                  <label
                    key={p.id}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "16px", border: plan === p.id ? "2px solid #16A34A" : "1px solid #d9d9d9",
                      borderRadius: 8, background: plan === p.id ? "#f0fdf4" : "#fff", cursor: "pointer",
                      transition: "border-color 0.15s",
                    }}
                  >
                    <input
                      type="radio" name="plan" value={p.id}
                      checked={plan === p.id} onChange={() => setPlan(p.id)}
                      style={{ accentColor: "#16A34A", width: 18, height: 18 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 15, color: "#1a1a1a" }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: "#707070", marginTop: 2 }}>{p.desc}</div>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 18, color: "#1a1a1a" }}>
                      ${p.price}<span style={{ fontSize: 13, fontWeight: 400, color: "#707070" }}> {p.unit}</span>
                    </div>
                  </label>
                ))}
              </div>
            </Section>

            {/* Delivery info */}
            <Section title="Delivery information">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Field label="Email" value={form.email} onChange={set("email")} type="email" span={2} required />
                <Field label="First name" value={form.firstName} onChange={set("firstName")} required />
                <Field label="Last name" value={form.lastName} onChange={set("lastName")} required />
                <Field label="Address" value={form.address} onChange={set("address")} span={2} required />
                <Field label="City" value={form.city} onChange={set("city")} required />
                <Field label="State / Province" value={form.state} onChange={set("state")} required />
                <Field label="ZIP / Postal code" value={form.zip} onChange={set("zip")} required />
                <SelectField label="Country" value={form.country} onChange={set("country")} options={["Mexico", "United States"]} />
                <Field label="Phone" value={form.phone} onChange={set("phone")} type="tel" span={2} />
              </div>
            </Section>

            {/* Payment */}
            <Section title="Payment">
              <div style={{ background: "#fafafa", border: "1px solid #e3e3e3", borderRadius: 8, padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <svg width="36" height="24" viewBox="0 0 36 24" fill="none"><rect width="36" height="24" rx="4" fill="#1A1F36" /><text x="18" y="15" fill="#fff" fontSize="8" fontWeight="700" textAnchor="middle">CARD</text></svg>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>Credit card</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <FieldLabel>Card number</FieldLabel>
                    <input
                      style={inputStyle} placeholder="•••• •••• •••• 4242"
                      value="4242 4242 4242 4242" readOnly
                    />
                  </div>
                  <div>
                    <FieldLabel>Expiration date</FieldLabel>
                    <input style={inputStyle} placeholder="MM / YY" value="12 / 28" readOnly />
                  </div>
                  <div>
                    <FieldLabel>Security code</FieldLabel>
                    <input style={inputStyle} placeholder="CVC" value="123" readOnly />
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "#999", marginTop: 12 }}>
                  Demo checkout — Stripe integration coming soon.
                </p>
              </div>
            </Section>

            {/* Mobile submit */}
            <div className="checkout-mobile-submit">
              <button type="submit" disabled={loading} style={submitBtnStyle}>
                {loading ? "Processing..." : `Complete order · $${selected.price}`}
              </button>
            </div>
          </div>

          {/* Right: Order summary */}
          <div style={{ background: "#fff", border: "1px solid #e3e3e3", borderRadius: 12, padding: 24, position: "sticky", top: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 20px" }}>Order summary</h3>

            <div style={{ display: "flex", gap: 14, paddingBottom: 20, borderBottom: "1px solid #eee" }}>
              <div style={{
                width: 64, height: 64, borderRadius: 10, background: "#f0fdf4",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg viewBox="0 0 32 32" width="32" height="32" fill="#16A34A">
                  <path d="M16 4c4 4 7 8 7 13a7 7 0 1 1-14 0c0-5 3-9 7-13z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a1a" }}>{selected.name}</div>
                <div style={{ fontSize: 13, color: "#707070", marginTop: 2 }}>Organic produce basket</div>
                <div style={{ fontSize: 13, color: "#707070" }}>8-10 varieties, locally grown</div>
              </div>
            </div>

            <div style={{ padding: "16px 0", borderBottom: "1px solid #eee", display: "flex", flexDirection: "column", gap: 8 }}>
              <Row label="Subtotal" value={`$${selected.price}.00`} />
              <Row label="Delivery" value="Free" green />
              {plan === "weekly" && <Row label="First week discount (75%)" value="-$75.00" green />}
            </div>

            <div style={{ padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>Total</span>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: "#707070" }}>USD</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#1a1a1a" }}>
                  ${plan === "weekly" ? "25" : selected.price}.00
                </div>
              </div>
            </div>

            <button type="submit" className="checkout-desktop-submit" disabled={loading} style={submitBtnStyle}>
              {loading ? "Processing..." : `Complete order`}
            </button>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 14, fontSize: 12, color: "#999" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
              Secure, encrypted payment
            </div>
          </div>
        </form>
      </main>

      <style>{`
        @media (max-width: 768px) {
          form { grid-template-columns: 1fr !important; }
          .checkout-desktop-submit { display: none !important; }
        }
        @media (min-width: 769px) {
          .checkout-mobile-submit { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e3e3e3", borderRadius: 12, padding: 24, marginBottom: 16 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 16px" }}>{title}</h3>
      {children}
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#545454", marginBottom: 4 }}>{children}</label>;
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 12px", border: "1px solid #d9d9d9", borderRadius: 6,
  fontSize: 14, color: "#1a1a1a", background: "#fff", outline: "none",
  fontFamily: "inherit", boxSizing: "border-box",
};

function Field({ label, value, onChange, type = "text", span, required }: {
  label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; span?: number; required?: boolean;
}) {
  return (
    <div style={span === 2 ? { gridColumn: "1 / -1" } : undefined}>
      <FieldLabel>{label}</FieldLabel>
      <input style={inputStyle} type={type} value={value} onChange={onChange} required={required} />
    </div>
  );
}

function SelectField({ label, value, onChange, options }: {
  label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select style={{ ...inputStyle, appearance: "auto" } as React.CSSProperties} value={value} onChange={onChange}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Row({ label, value, green }: { label: string; value: string; green?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
      <span style={{ color: "#707070" }}>{label}</span>
      <span style={{ color: green ? "#16A34A" : "#1a1a1a", fontWeight: 500 }}>{value}</span>
    </div>
  );
}

const submitBtnStyle: React.CSSProperties = {
  width: "100%", padding: "16px", background: "#16A34A", color: "#fff",
  fontSize: 16, fontWeight: 700, border: "none", borderRadius: 8, cursor: "pointer",
  fontFamily: "inherit", transition: "background 0.15s",
};
