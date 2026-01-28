export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c1116] text-[#f6f1ea] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1c2a3a,transparent_55%)] opacity-80" />
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#b4793a] opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2f5f6f] opacity-30 blur-3xl" />

      <header className="fixed top-0 w-full backdrop-blur bg-[#0c1116]/80 border-b border-white/10 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
          <span className="font-semibold tracking-[0.2em] uppercase text-[#f6f1ea]">
            VanSlyke Ventures
          </span>
        </nav>
      </header>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="animate-fade-up">
            <p className="text-[#f0c27b] uppercase tracking-[0.3em] text-xs mb-6">
              Software engineering &amp; product delivery
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Reliable software delivery for growing organizations.
            </h1>
            <p className="text-sm text-[#c7c0b6] max-w-xl mb-6">
              VanSlyke Ventures, LLC is a U.S.-based software engineering services
              business specializing in custom web and application development,
              maintenance, and technical consulting.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:vinny@vanslykeventures.com"
                className="bg-[#f0c27b] text-[#1b1e23] px-6 py-3 rounded-full font-semibold hover:bg-[#f6d7a6] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <h2 className="text-xl font-semibold mb-4">Business Details</h2>
            <div className="space-y-4 text-sm text-[#c7c0b6]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Legal entity</span>
                <span className="text-white font-semibold">VanSlyke Ventures, LLC</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Location</span>
                <span className="text-white font-semibold">Ohio, United States</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Contact</span>
                <span className="text-white font-semibold">vinny@vanslykeventures.com</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Services</h2>
          </div>
          <div className="grid gap-6 text-sm text-[#c7c0b6] md:grid-cols-2 md:grid-rows-2">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:border-white/30 transition-colors h-full">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f0c27b] mb-3">
                    Custom Web &amp; App Development
                  </p>
                  <p>Web applications, portals, and internal tools built to spec.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f0c27b] mb-3">
                    Maintenance &amp; Improvements
                  </p>
                  <p>Stabilization, enhancements, and long-term support.</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-[#f0c27b] mb-4">
                Capabilities
              </p>
              <ul className="space-y-4">
                {[
                  "Web applications, dashboards, and admin interfaces.",
                  "API integrations, automation, and data workflows.",
                  "Architecture guidance and technical planning.",
                  "Ongoing maintenance and improvements.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#f0c27b] text-xs mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-[#f0c27b] mb-4">
                Focus
              </p>
              <p className="text-base text-[#f6f1ea] mb-3">
                Clean delivery, dependable support, and straightforward communication.
              </p>
              <p>
                I prioritize stability, documentation, and handoff so your team can
                operate confidently after delivery.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-[#f0c27b] mb-4">
                Contact
              </p>
              <p className="text-base text-[#f6f1ea] mb-3">
                Business inquiries, rates, collaboration.
              </p>
              <a
                href="mailto:vinny@vanslykeventures.com"
                className="inline-flex items-center justify-center bg-[#f0c27b] text-[#1b1e23] px-5 py-2.5 rounded-full font-semibold hover:bg-[#f6d7a6] transition-colors"
              >
                Email vinny@vanslykeventures.com
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-xs text-[#9c958a]">
          © {new Date().getFullYear()} VanSlyke Ventures, LLC.
        </footer>
      </div>
    </main>
  );
}
