export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              <span className="text-lg font-bold text-white">
                Simply Fresh Cabo
              </span>
            </div>
            <p className="text-sm text-green-400/60 leading-relaxed mb-4">
              Locally grown hydroponic produce, delivered fresh to your door in
              Cabo San Lucas, Mexico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="text-sm text-green-400/70 hover:text-green-300 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-green-400/70 hover:text-green-300 transition-colors">
                  Our Produce
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-green-400/70 hover:text-green-300 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-green-400/70 hover:text-green-300 transition-colors">
                  Our Farm
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-green-400/70 hover:text-green-300 transition-colors">
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-green-400/70">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Cabo San Lucas, B.C.S., Mexico
              </li>
              <li>
                <a href="mailto:hello@simplyfreshcabo.com" className="flex items-center gap-2 text-sm text-green-400/70 hover:text-green-300 transition-colors">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  hello@simplyfreshcabo.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/526241234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-green-400/70 hover:text-green-300 transition-colors">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Delivery Hours
            </h4>
            <ul className="space-y-2.5 text-sm text-green-400/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-green-300">8am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-green-300">9am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-green-300">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-green-500/50">
            &copy; {new Date().getFullYear()} Simply Fresh Cabo. All rights reserved.
          </p>
          <p className="text-xs text-green-500/50">
            Hydroponically grown with care in Cabo San Lucas, Mexico
          </p>
        </div>
      </div>
    </footer>
  );
}
