const testimonials = [
  {
    quote:
      "The lettuce and herbs from Simply Fresh are incredible. You can literally taste the freshness — nothing in the grocery store even comes close.",
    name: "Maria R.",
    role: "Home Chef, Cabo San Lucas",
  },
  {
    quote:
      "As a restaurant owner, sourcing quality produce in Cabo was always a challenge. Simply Fresh changed everything. Consistent quality, delivered same-day.",
    name: "Carlos M.",
    role: "Restaurant Owner",
  },
  {
    quote:
      "I love knowing exactly where my food comes from. The hydroponic approach means cleaner produce and I feel good about the sustainability aspect.",
    name: "Sarah T.",
    role: "Expat, Pedregal",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-950 tracking-tight">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-green-100/50 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-green-800/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-green-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
