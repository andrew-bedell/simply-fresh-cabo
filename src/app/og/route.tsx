import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#FAF8F2",
          fontFamily: "Inter, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px",
            width: "55%",
            gap: "20px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg viewBox="0 0 32 32" width="40" height="40">
              <circle cx="16" cy="16" r="15" fill="#DAF0D8" />
              <path
                d="M16 4c4 4 7 8 7 13a7 7 0 1 1-14 0c0-5 3-9 7-13z"
                fill="#2E7D32"
              />
              <path
                d="M16 9v14M12 14l4 3M20 14l-4 3"
                stroke="#fff"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#1E293B",
                }}
              >
                Simply Fresh
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#16A34A",
                  fontStyle: "italic",
                }}
              >
                Cabo
              </span>
            </div>
          </div>
          {/* Headline */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#1E293B",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            The freshest{" "}
            <span style={{ color: "#16A34A", fontStyle: "italic" }}>
              organic produce
            </span>{" "}
            in Cabo, delivered to your doorstep once a week.
          </div>

          {/* Badges */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "12px",
            }}
          >
            {["100% ORGANIC", "LOCALLY GROWN", "WEEKLY DELIVERY"].map(
              (text) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#1E293B",
                    letterSpacing: "0.05em",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "2px solid #16A34A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="#16A34A"
                    >
                      <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11z" />
                    </svg>
                  </div>
                  {text}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right side - green gradient accent */}
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "50%",
            height: "100%",
            background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              gap: "8px",
            }}
          >
            <svg viewBox="0 0 32 32" width="80" height="80">
              <path
                d="M16 2c6 6 10 11 10 18a10 10 0 1 1-20 0c0-7 4-12 10-18z"
                fill="rgba(255,255,255,0.3)"
              />
              <path
                d="M16 8v16M12 14l4 4M20 14l-4 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div style={{ fontSize: "24px", fontWeight: 700, opacity: 0.9 }}>
              Hydroponic · Organic · Local
            </div>
          </div>
        </div>

        {/* Bottom green bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "55%",
            height: "8px",
            background: "#16A34A",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
