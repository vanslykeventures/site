export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold">
            VanSlyke Ventures
          </span>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#work" className="hover:text-slate-100">
              Work
            </a>
            <a href="#how" className="hover:text-slate-100">
              How I Work
            </a>
            <a href="#contact" className="hover:text-slate-100">
              Contact
            </a>
            <a
              href="https://github.com/vanslykeventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">

        {/* Hero */}
        <section className="mb-24">
          <h1 className="text-4xl font-semibold mb-4">
            VanSlyke Ventures
          </h1>
          <p className="text-xl text-slate-200 mb-3">
            Software development and technical consulting for organizations that need things to work.
          </p>
          <p className="text-slate-400 max-w-2xl">
            I help teams build, fix, and maintain software systems that are reliable,
            understandable, and easy to live with.
          </p>
        </section>

        {/* What I Do */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 border-b border-slate-800 pb-2">
            What I Do
          </h2>
          <ul className="grid gap-3 text-slate-300">
            <li>Custom web and application development</li>
            <li>Internal tools and workflow automation</li>
            <li>Technical planning and architecture guidance</li>
            <li>Ongoing maintenance and improvements</li>
          </ul>
        </section>

        {/* Selected Work */}
        <section id="work" className="mb-20 scroll-mt-32">
          <h2 className="text-2xl font-semibold mb-8 border-b border-slate-800 pb-2">
            Selected Work
          </h2>

          {/* Business Work */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4 text-cyan-300">
              VanSlyke Ventures
            </h3>

            <div className="space-y-6">
              <div className="rounded-lg border border-slate-800 p-5 bg-slate-900/40">
                <h4 className="font-semibold mb-1">
                  Custom Operations Platform
                </h4>
                <p className="text-slate-400 text-sm mb-2">
                  Designed and built a web-based system to replace manual workflows,
                  improve data accuracy, and reduce administrative overhead.
                </p>
                <p className="text-xs text-slate-500">
                  React · TypeScript · Node · PostgreSQL
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 p-5 bg-slate-900/40">
                <h4 className="font-semibold mb-1">
                  Internal Tools & Automation
                </h4>
                <p className="text-slate-400 text-sm mb-2">
                  Built internal tools and scripts to automate repetitive processes
                  and streamline reporting for small teams.
                </p>
                <p className="text-xs text-slate-500">
                  JavaScript · APIs · Cloud Services
                </p>
              </div>
            </div>
          </div>

          {/* Full-Time Work */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-cyan-300">
              Professional Experience
            </h3>

            <div className="space-y-6">
              <div className="rounded-lg border border-slate-800 p-5 bg-slate-900/40">
                <h4 className="font-semibold mb-1">
                  Enterprise Software Systems
                </h4>
                <p className="text-slate-400 text-sm mb-2">
                  Contributed to the design, development, and maintenance of
                  large-scale software used by internal and external stakeholders.
                </p>
                <p className="text-xs text-slate-500">
                  Distributed systems · Frontend & backend collaboration
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 p-5 bg-slate-900/40">
                <h4 className="font-semibold mb-1">
                  Long-Term Platform Maintenance
                </h4>
                <p className="text-slate-400 text-sm mb-2">
                  Worked on evolving existing platforms over time, balancing
                  new features, reliability, and technical debt.
                </p>
                <p className="text-xs text-slate-500">
                  Stability · Incremental improvement · Code stewardship
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section id="how" className="mb-20 scroll-mt-32">
          <h2 className="text-2xl font-semibold mb-6 border-b border-slate-800 pb-2">
            How I Work
          </h2>
          <p className="text-slate-300 max-w-3xl">
            Engagements are typically project-based or monthly. I focus on clear scope,
            direct communication, and building systems that are easy to understand and
            maintain long after launch.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24 scroll-mt-32">
          <h2 className="text-2xl font-semibold mb-6 border-b border-slate-800 pb-2">
            Contact
          </h2>
          <p className="mb-6 text-slate-300">
            Have a question or want to see if we’re a good fit? Send a note.
          </p>

          <form
            action="mailto:hello@vanslykeventures.com"
            method="post"
            encType="text/plain"
            className="space-y-4 max-w-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-slate-100"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-slate-100"
            />
            <textarea
              name="message"
              placeholder="What can I help with?"
              rows={5}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-slate-100"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-slate-900 px-5 py-2 rounded font-medium hover:bg-cyan-400"
            >
              Send
            </button>
          </form>
        </section>

        <footer className="text-sm text-slate-500">
          © {new Date().getFullYear()} VanSlyke Ventures, LLC
        </footer>
      </div>
    </main>
  );
}
