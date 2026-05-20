export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-sand-50" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sand-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-green-800 uppercase tracking-wide">
                Now Delivering in Cabo San Lucas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-950 leading-tight tracking-tight">
              Farm-Fresh Produce,{" "}
              <span className="text-green-600">Grown Locally</span> &amp; Delivered Daily
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-green-800/70 leading-relaxed">
              Hydroponically grown fruits, vegetables, and herbs harvested at
              peak freshness. From our farm to your kitchen — no middlemen,
              no delays, no compromises.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors text-base shadow-lg shadow-green-700/25"
              >
                Start Your Order
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-200 text-green-800 font-semibold rounded-full hover:bg-green-50 transition-colors text-base"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-green-900">100%</p>
                <p className="text-sm text-green-700/70">Pesticide Free</p>
              </div>
              <div className="w-px h-10 bg-green-200" />
              <div>
                <p className="text-2xl font-bold text-green-900">Same Day</p>
                <p className="text-sm text-green-700/70">Harvest &amp; Delivery</p>
              </div>
              <div className="w-px h-10 bg-green-200" />
              <div>
                <p className="text-2xl font-bold text-green-900">Local</p>
                <p className="text-sm text-green-700/70">Cabo Grown</p>
              </div>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-[2rem] rotate-3 opacity-20" />
              <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-[2rem] w-full h-full flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <ProduceIllustration />
                  <p className="mt-4 text-green-700 font-medium text-sm">
                    Fresh hydroponic produce, harvested daily
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-900">Harvested Today</p>
                  <p className="text-xs text-green-600">Delivered to your door</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProduceIllustration() {
  return (
    <svg className="w-48 h-48 text-green-600" viewBox="0 0 200 200" fill="none">
      {/* Lettuce / leafy green */}
      <ellipse cx="100" cy="110" rx="60" ry="50" fill="currentColor" opacity="0.15" />
      <path d="M80 130 Q100 60 120 130" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.25" />
      <path d="M70 125 Q100 70 130 125" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M90 120 Q100 80 110 120" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />

      {/* Tomato */}
      <circle cx="55" cy="85" r="20" fill="#ef4444" opacity="0.7" />
      <path d="M50 67 Q55 60 60 67" stroke="#22c55e" strokeWidth="2" fill="#22c55e" opacity="0.8" />

      {/* Herb sprig */}
      <path d="M140 70 Q145 50 150 70" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.4" />
      <path d="M135 80 Q140 60 145 80" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
      <path d="M145 80 Q150 60 155 80" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
      <line x1="143" y1="90" x2="145" y2="55" stroke="currentColor" strokeWidth="2" />

      {/* Water drops - hydroponic hint */}
      <path d="M165 120 Q168 110 171 120 Q168 125 165 120Z" fill="#3b82f6" opacity="0.5" />
      <path d="M155 135 Q157 128 159 135 Q157 139 155 135Z" fill="#3b82f6" opacity="0.4" />
    </svg>
  );
}
