const products = [
  {
    name: "Leafy Greens",
    items: "Lettuce, Arugula, Spinach, Kale, Chard",
    color: "from-green-400 to-green-600",
    bgLight: "bg-green-50",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M12 30 Q20 8 28 30" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
        <path d="M15 28 Q20 12 25 28" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3" />
        <path d="M18 26 Q20 16 22 26" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.4" />
        <line x1="20" y1="30" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Fresh Herbs",
    items: "Basil, Cilantro, Mint, Parsley, Dill",
    color: "from-emerald-400 to-emerald-600",
    bgLight: "bg-emerald-50",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M18 28 Q14 18 18 12 Q22 18 18 28Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.25" />
        <path d="M22 28 Q18 20 22 14 Q26 20 22 28Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.25" />
        <path d="M20 30 L20 18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
      </svg>
    ),
  },
  {
    name: "Tomatoes",
    items: "Cherry, Roma, Beefsteak, Heirloom, Grape",
    color: "from-red-400 to-red-600",
    bgLight: "bg-red-50",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="22" r="10" fill="#ef4444" opacity="0.6" />
        <circle cx="20" cy="22" r="10" stroke="#dc2626" strokeWidth="1.5" fill="none" />
        <path d="M17 13 Q20 10 23 13" stroke="#22c55e" strokeWidth="1.5" fill="#22c55e" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Peppers",
    items: "Bell, Jalapeno, Habanero, Serrano, Poblano",
    color: "from-orange-400 to-red-500",
    bgLight: "bg-orange-50",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M16 14 Q20 10 24 14 Q26 22 24 30 Q20 32 16 30 Q14 22 16 14Z" fill="#f97316" opacity="0.5" stroke="#ea580c" strokeWidth="1.5" />
        <path d="M19 14 Q20 10 21 14" stroke="#22c55e" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Cucumbers",
    items: "English, Persian, Pickling",
    color: "from-lime-400 to-green-500",
    bgLight: "bg-lime-50",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="6" ry="12" fill="#84cc16" opacity="0.5" stroke="#65a30d" strokeWidth="1.5" transform="rotate(-20 20 20)" />
        <circle cx="19" cy="17" r="0.8" fill="#65a30d" opacity="0.5" />
        <circle cx="21" cy="21" r="0.8" fill="#65a30d" opacity="0.5" />
        <circle cx="19" cy="25" r="0.8" fill="#65a30d" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Microgreens",
    items: "Sunflower, Pea Shoots, Radish, Broccoli",
    color: "from-teal-400 to-teal-600",
    bgLight: "bg-teal-50",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <line x1="14" y1="28" x2="16" y2="18" stroke="currentColor" strokeWidth="1" />
        <line x1="18" y1="28" x2="18" y2="16" stroke="currentColor" strokeWidth="1" />
        <line x1="22" y1="28" x2="22" y2="17" stroke="currentColor" strokeWidth="1" />
        <line x1="26" y1="28" x2="24" y2="18" stroke="currentColor" strokeWidth="1" />
        <circle cx="16" cy="17" r="2.5" fill="currentColor" opacity="0.3" />
        <circle cx="18" cy="15" r="2.5" fill="currentColor" opacity="0.25" />
        <circle cx="22" cy="16" r="2.5" fill="currentColor" opacity="0.3" />
        <circle cx="24" cy="17" r="2.5" fill="currentColor" opacity="0.25" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-3">
            Our Produce
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-950 tracking-tight">
            Fresh From Our Hydroponic Farm
          </h2>
          <p className="mt-4 text-lg text-green-800/60">
            Everything we grow is harvested at peak ripeness for maximum flavor
            and nutrition. Here&apos;s what&apos;s currently in season.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-green-100 hover:border-green-200"
            >
              <div
                className={`w-16 h-16 ${product.bgLight} rounded-2xl flex items-center justify-center text-green-700 mb-5`}
              >
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-green-700/60 leading-relaxed">
                {product.items}
              </p>
              <div className="mt-4 flex items-center text-green-600 text-sm font-medium group-hover:text-green-700 transition-colors">
                <span>View varieties</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
