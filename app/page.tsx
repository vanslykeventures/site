export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-slate-900">
      <section className="mb-20">
        <h1 className="text-4xl font-semibold mb-4">
          VanSlyke Ventures
        </h1>
        <p className="text-xl font-medium mb-2">
          Software development and technical consulting for organizations that need things to work.
        </p>
        <p className="text-slate-600">
          I help teams build, fix, and maintain software without unnecessary complexity.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom web and application development</li>
          <li>Internal tools and workflow automation</li>
          <li>Technical planning and architecture guidance</li>
          <li>Ongoing maintenance and improvements</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Who I Work With</h2>
        <p>
          Small businesses, nonprofits, associations, and teams that need experienced
          technical help without hiring full-time staff.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How I Work</h2>
        <p>
          Most engagements are project-based or monthly. Clear scope, straightforward
          communication, and no long-term lock-in.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>
          VanSlyke Ventures is led by Vincent VanSlyke, a software developer focused on
          building reliable, understandable systems that solve real problems.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-6">
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
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="What can I help with?"
            rows={5}
            required
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="bg-slate-900 text-white px-5 py-2 rounded hover:bg-slate-800"
          >
            Send
          </button>
        </form>
      </section>

      <footer className="text-sm text-slate-500">
        © {new Date().getFullYear()} VanSlyke Ventures, LLC
      </footer>
    </main>
  );
}
