function Waveform({ className = "" }: { className?: string }) {
  const bars = [
    28, 44, 62, 38, 78, 52, 90, 48, 70, 36, 84, 58, 42, 96, 64, 46, 72, 34, 88,
    54, 40, 76, 50, 92, 60, 32, 68, 46, 80, 56, 38, 74, 48, 86, 52, 66, 44, 78,
    36, 70, 58, 82, 48, 64, 40, 76, 54, 88, 46, 72,
  ];

  return (
    <div
      className={`flex items-end justify-center gap-[2px] sm:gap-[3px] md:gap-1 ${className || "h-40 sm:h-56 md:h-72"}`}
      aria-hidden="true"
    >
      {bars.map((height, i) => (
        <span
          key={i}
          className="wave-bar w-[4px] sm:w-1.5 md:w-2 rounded-sm bg-gradient-to-t from-signal/50 via-signal to-white"
          style={{
            height: `${height}%`,
            animationDelay: `${(i % 12) * 0.11}s`,
            animationDuration: `${1.3 + (i % 5) * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}

function TranscriptPreview() {
  return (
    <div className="hero-drift relative mx-auto w-full max-w-lg px-2 font-mono text-[11px] leading-relaxed text-white/70 sm:text-xs md:text-sm">
      <p className="mb-3 text-signal/90">[00:12:04] Speaker 1</p>
      <p className="mb-4 text-white/90">
        When we started recording, the goal was clarity—not just speed. Every
        pause, every name, every shift in tone had to land on the page.
      </p>
      <p className="mb-3 text-signal/90">[00:12:28] Speaker 2</p>
      <p className="text-white/80">
        That&apos;s exactly why we trust Freelance Nexus. The transcript reads
        like the conversation felt.
      </p>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a2c34] to-transparent" />
    </div>
  );
}

const services = [
  {
    title: "Podcast & media",
    copy: "Episode-ready transcripts with speaker labels, timestamps, and clean formatting for show notes and accessibility.",
  },
  {
    title: "Interviews & research",
    copy: "Verbatim or lightly edited transcripts that preserve nuance for qualitative research, journalism, and oral history.",
  },
  {
    title: "Legal & depositions",
    copy: "Careful, confidential transcription with consistent terminology and reliable turnaround for professional use.",
  },
  {
    title: "Meetings & webinars",
    copy: "Actionable records of multi-speaker sessions—searchable, shareable, and ready for your team.",
  },
];

const steps = [
  {
    num: "01",
    title: "Send your audio",
    copy: "Upload files or share a secure link. We handle common formats and imperfect recordings.",
  },
  {
    num: "02",
    title: "We transcribe with care",
    copy: "Human review catches names, jargon, and crosstalk that automated tools miss.",
  },
  {
    num: "03",
    title: "Receive polished text",
    copy: "Get delivery in your preferred format—timestamps, speakers, and style guide included.",
  },
];

export default function Home() {
  return (
    <div className="page-atmosphere flex min-h-full flex-col">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-wide text-white/95 sm:text-base"
          >
            Freelance Nexus
          </a>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#services" className="hidden transition hover:text-white sm:inline">
              Services
            </a>
            <a href="#process" className="hidden transition hover:text-white sm:inline">
              Process
            </a>
            <a
              href="#contact"
              className="bg-signal px-4 py-2 font-medium text-ink transition hover:bg-white"
            >
              Get a quote
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero — one composition, brand-first, full-bleed visual */}
        <section className="hero-plane relative flex min-h-[100svh] flex-col overflow-hidden text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Dominant visual plane — waveform sits in the composition, not below it */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[6%] top-[48%] flex items-end justify-center opacity-90 md:inset-y-[14%] md:left-[46%] md:right-[-2%] md:items-center md:opacity-100">
            <div className="anim-rise anim-rise-delay-4 w-full max-w-3xl px-4 md:pr-6">
              <Waveform className="h-24 sm:h-32 md:h-52 lg:h-64" />
              <div className="mt-2 hidden lg:block">
                <TranscriptPreview />
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-24 pt-20 sm:px-8 sm:pb-20 md:pb-16">
            <div className="max-w-xl md:max-w-[48%]">
              <p className="anim-rise font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
                Freelance Nexus
              </p>
              <div className="accent-rule mt-3 sm:mt-4" />
              <h1 className="anim-rise anim-rise-delay-1 mt-3 font-display text-[clamp(1.15rem,2.8vw,2.25rem)] font-semibold leading-snug tracking-tight text-white/95 sm:mt-4">
                Speech, captured as precise text.
              </h1>
              <p className="anim-rise anim-rise-delay-2 mt-2 max-w-md text-[0.9rem] leading-relaxed text-white/65 sm:mt-4 sm:text-base md:text-lg">
                Professional transcription for creators, researchers, and teams
                who need every word right.
              </p>
              <div className="anim-rise anim-rise-delay-3 mt-5 flex flex-wrap gap-3 sm:mt-7">
                <a
                  href="#contact"
                  className="bg-signal px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white sm:px-6 sm:py-3.5"
                >
                  Start a project
                </a>
                <a
                  href="#services"
                  className="border border-white/25 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/50 hover:bg-white/5 sm:px-6 sm:py-3.5"
                >
                  View services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-mute">
              Transcription services
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              From raw audio to readable truth.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mute">
              We specialize in turning spoken conversations into clear,
              dependable transcripts—built for how you actually use them.
            </p>

            <ul className="mt-16 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="group grid gap-3 py-8 transition sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:gap-10 sm:py-10"
                >
                  <h3 className="font-display text-xl font-semibold text-ink transition group-hover:text-ink-soft sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-mute sm:text-lg">
                    {service.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visual band — quality */}
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(159,216,79,0.2),_transparent_65%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Accuracy you can publish.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65">
                Automated tools draft. We refine—catching speakers, spelling,
                and the moments that matter for your audience.
              </p>
            </div>
            <dl className="grid gap-8 sm:grid-cols-2">
              {[
                { label: "Human-reviewed", value: "Every file" },
                { label: "Formats", value: "DOCX, SRT, TXT" },
                { label: "Speakers", value: "Labeled clearly" },
                { label: "Turnaround", value: "Flexible & fast" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-signal pl-4">
                  <dt className="text-sm uppercase tracking-wider text-white/45">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl font-semibold text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-mute">
              How it works
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Three steps to a finished transcript.
            </h2>

            <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
              {steps.map((step) => (
                <li key={step.num}>
                  <span className="font-display text-5xl font-bold text-mist-deep">
                    {step.num}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-mute">
                    {step.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden bg-ink-soft px-6 py-14 text-white sm:px-12 sm:py-20">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/20 blur-3xl"
                aria-hidden
              />
              <div className="relative max-w-2xl">
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Ready when your audio is.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/65">
                  Tell us about your project—length, speakers, deadline, and
                  preferred format. We&apos;ll reply with a clear quote.
                </p>
                <form
                  className="mt-10 grid gap-4 sm:grid-cols-2"
                  action="mailto:hello@freelancenexus.com"
                  method="get"
                  encType="text/plain"
                >
                  <label className="block sm:col-span-1">
                    <span className="mb-2 block text-sm text-white/55">Name</span>
                    <input
                      name="name"
                      required
                      className="w-full border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-2 block text-sm text-white/55">Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm text-white/55">
                      Project details
                    </span>
                    <textarea
                      name="body"
                      rows={4}
                      required
                      className="w-full resize-y border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                      placeholder="Audio length, speakers, deadline, format…"
                    />
                  </label>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="bg-signal px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
                    >
                      Request a quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-sm font-semibold text-ink">
            Freelance Nexus
          </p>
          <p className="text-sm text-mute">
            Precision transcription for the spoken word.
          </p>
        </div>
      </footer>
    </div>
  );
}
