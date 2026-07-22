import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CtaBand,
  GuaranteeBand,
  PageFrame,
  ProofStrip,
  SectionHeading,
  SiteHeader,
  StudioStory,
  Testimonials,
  differentiators,
  faqs,
  services,
  steps,
  useCases,
} from "./site";

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
          className="wave-bar w-[4px] sm:w-1.5 md:w-2 rounded-sm bg-gradient-to-t from-ink-soft/60 via-signal to-[#FDFDFD]"
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

function HomeHero() {
  return (
    <section className="hero-plane relative flex min-h-[100svh] flex-col overflow-x-hidden text-white">
      <SiteHeader dark />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-[6%] top-[48%] flex items-end justify-center opacity-90 md:inset-y-[14%] md:left-[46%] md:right-[-2%] md:items-center md:opacity-100">
        <div className="anim-rise anim-rise-delay-4 w-full max-w-3xl px-4 md:pr-6">
          <Waveform className="h-24 sm:h-32 md:h-52 lg:h-64" />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-24 pt-20 sm:px-8 sm:pb-20 md:pb-16">
        <div className="max-w-xl md:max-w-[48%]">
          <p className="anim-rise font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
            Freelance Nexus
          </p>
          <div className="accent-rule mt-3 sm:mt-4" />
          {/* <h1 className="anim-rise anim-rise-delay-1 mt-3 font-display text-[clamp(1.15rem,2.8vw,2.25rem)] font-semibold leading-snug tracking-tight text-white/95 sm:mt-4">
            Publish-ready transcripts in 24–72 hours—human-reviewed.
          </h1> */}
          <p className="anim-rise anim-rise-delay-2 mt-2 max-w-md text-[0.9rem] leading-relaxed text-white/65 sm:mt-4 sm:text-base md:text-lg">
            A boutique studio for creators, researchers, and professionals who
            need clear, speaker-labeled text —not a ticket queue.
          </p>
          <div className="anim-rise anim-rise-delay-3 mt-5 flex flex-wrap gap-3 sm:mt-7">
            <Link href="/contact" className="btn-primary px-5 py-2.5 text-sm sm:px-6 sm:py-3.5">
              Get a free quote
              <ArrowRight className="btn-arrow size-4" aria-hidden />
            </Link>
            <Link href="/sample" className="btn-secondary px-5 py-2.5 text-sm sm:px-6 sm:py-3.5">
              See a sample
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageFrame hero={<HomeHero />}>
      <section className="border-b border-[var(--line)] bg-paper/70 px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <ProofStrip />
        
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Services"
            title="Transcription first. Translation and recording when you need them."
            copy="Built around the same promise as our mark: clear speech captured as usable text—plus support across the full communication workflow."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="card-lift group border border-[var(--line)] bg-paper/85 p-8"
                >
                  <span className="icon-badge">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-ink-soft">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-mute">
                    {service.summary}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.outcomes.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-signal pl-3 text-sm text-ink transition-[border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="link-arrow inline-flex border border-[var(--line)] bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:border-signal hover:bg-signal/5"
            >
              Explore all services
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(197,139,75,0.2),_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Why clients choose us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Boutique care. Platform-grade clarity.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Large platforms optimize for volume. We optimize for the transcript
              you actually open and use—accurate, organized, and confidential.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-lift group border border-white/10 bg-white/5 p-6 hover:border-signal/40 hover:bg-white/[0.08]"
                >
                  <span className="inline-flex size-11 items-center justify-center bg-signal/15 text-signal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-signal group-hover:text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Use cases"
            title="Built for the work behind the recording."
            copy="From depositions to podcasts, we shape transcripts around how your team will use them next."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card-lift group border-l-2 border-ink-soft bg-paper/70 p-6 hover:border-signal"
                >
                  <span className="icon-badge">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-10">
            <Link href="/use-cases" className="link-arrow text-sm font-medium text-ink-soft hover:text-ink">
              Browse industry use cases
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps from recording to finished text."
          />
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.num}
                  className="card-lift group border border-[var(--line)] bg-paper/80 p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="icon-badge">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-4xl font-bold text-mist-deep transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-signal">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {step.copy}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <StudioStory />

      <GuaranteeBand />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Client feedback"
            title="Trusted for clarity under deadline."
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers before you send a file."
          />
          <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.slice(0, 5).map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="cursor-pointer font-display text-lg font-semibold text-ink">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="faq-toggle text-xl text-signal">+</span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-mute">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="link-arrow text-sm font-medium text-ink-soft hover:text-ink">
              Read all FAQs
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
