export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-green-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / illustration side */}
          <div className="relative">
            <div className="relative bg-green-800/50 rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/30 to-transparent" />
              <HydroponicIllustration />
            </div>
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-2 sm:right-8 bg-white text-green-900 rounded-2xl shadow-2xl p-5">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-700">90%</p>
                  <p className="text-xs text-green-600">Less Water</p>
                </div>
                <div className="w-px h-10 bg-green-100" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-700">365</p>
                  <p className="text-xs text-green-600">Days/Year</p>
                </div>
                <div className="w-px h-10 bg-green-100" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-700">0</p>
                  <p className="text-xs text-green-600">Pesticides</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Growing the Future of Fresh Food in Cabo San Lucas
            </h2>
            <div className="mt-6 space-y-4 text-green-200/80 leading-relaxed">
              <p>
                Simply Fresh Cabo was born from a simple belief: everyone in Cabo
                San Lucas deserves access to truly fresh, locally grown produce —
                not vegetables that spent days on a truck from the mainland.
              </p>
              <p>
                Using advanced hydroponic growing systems, we cultivate premium
                fruits, vegetables, and herbs right here in Cabo. Our
                controlled-environment agriculture uses 90% less water than
                traditional farming, requires zero pesticides, and produces
                crops year-round regardless of season.
              </p>
              <p>
                From our farm to your table in hours, not days. That&apos;s the
                Simply Fresh difference.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-green-800/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-green-300 mb-1">Sustainable</p>
                <p className="text-xs text-green-400/70">
                  Closed-loop water systems with minimal environmental impact
                </p>
              </div>
              <div className="bg-green-800/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-green-300 mb-1">Year-Round</p>
                <p className="text-xs text-green-400/70">
                  Climate-controlled growing means fresh produce every season
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HydroponicIllustration() {
  return (
    <svg className="w-64 h-48 text-green-400 relative z-10" viewBox="0 0 300 200" fill="none">
      {/* Growing channels */}
      <rect x="30" y="120" width="240" height="12" rx="6" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
      <rect x="30" y="150" width="240" height="12" rx="6" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />

      {/* Plants in channel 1 */}
      {[60, 110, 160, 210].map((x) => (
        <g key={`plant1-${x}`}>
          <line x1={x} y1="120" x2={x} y2={90} stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx={x - 6} cy={85} rx="8" ry="12" fill="currentColor" opacity="0.3" transform={`rotate(-20 ${x - 6} 85)`} />
          <ellipse cx={x + 6} cy={85} rx="8" ry="12" fill="currentColor" opacity="0.3" transform={`rotate(20 ${x + 6} 85)`} />
          <ellipse cx={x} cy={78} rx="7" ry="10" fill="currentColor" opacity="0.25" />
        </g>
      ))}

      {/* Plants in channel 2 */}
      {[85, 135, 185, 235].map((x) => (
        <g key={`plant2-${x}`}>
          <line x1={x} y1="150" x2={x} y2="128" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx={x - 5} cy={125} rx="6" ry="9" fill="currentColor" opacity="0.3" transform={`rotate(-15 ${x - 5} 125)`} />
          <ellipse cx={x + 5} cy={125} rx="6" ry="9" fill="currentColor" opacity="0.3" transform={`rotate(15 ${x + 5} 125)`} />
        </g>
      ))}

      {/* Water drops */}
      <path d="M70 170 Q72 165 74 170 Q72 173 70 170Z" fill="#60a5fa" opacity="0.5" />
      <path d="M150 170 Q152 165 154 170 Q152 173 150 170Z" fill="#60a5fa" opacity="0.5" />
      <path d="M230 170 Q232 165 234 170 Q232 173 230 170Z" fill="#60a5fa" opacity="0.5" />

      {/* Light rays from top */}
      <line x1="150" y1="20" x2="80" y2="70" stroke="#fbbf24" strokeWidth="1" opacity="0.3" />
      <line x1="150" y1="20" x2="150" y2="70" stroke="#fbbf24" strokeWidth="1" opacity="0.3" />
      <line x1="150" y1="20" x2="220" y2="70" stroke="#fbbf24" strokeWidth="1" opacity="0.3" />
      <circle cx="150" cy="18" r="8" fill="#fbbf24" opacity="0.3" />
    </svg>
  );
}
