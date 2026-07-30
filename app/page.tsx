import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import {
  CtaBand,
  GuaranteeBand,
  PageFrame,
  SectionHeading,
  SiteHeader,
  StudioStory,
  Testimonials,
  differentiators,
  faqs,
  proofPoints,
  services,
  steps,
  useCases,
} from "./site";

function HomeHero() {
  return (
    <section className="relative flex h-[100svh] max-h-[100svh] flex-col overflow-hidden">
      <SiteHeader solid />
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[#062858] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Background waves */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-40 420 C180 240 340 620 560 400 C780 180 960 560 1180 360 C1320 240 1400 300 1520 260"
            stroke="rgba(126,200,203,0.55)"
            strokeWidth="2.5"
          />
          <path
            d="M-60 480 C200 300 380 680 600 460 C820 240 1020 600 1240 420 C1360 320 1440 360 1540 330"
            stroke="rgba(126,200,203,0.28)"
            strokeWidth="2"
          />
          <path
            d="M-20 540 C220 360 420 720 640 520 C860 320 1080 640 1300 480 C1420 400 1500 440 1560 410"
            stroke="rgba(197,139,75,0.25)"
            strokeWidth="1.75"
          />
          <path
            d="M40 300 C260 160 420 480 640 280 C860 80 1040 420 1260 240 C1380 140 1460 180 1560 150"
            stroke="rgba(126,200,203,0.18)"
            strokeWidth="1.5"
          />
        </svg>

        <div className="relative z-10 mx-auto flex w-[90vw] max-w-[90vw] min-h-0 flex-1 flex-col justify-center py-6 sm:py-8 lg:py-10">
          <div className="grid min-h-0 items-center gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10 xl:gap-12">
            <div className="order-2 lg:order-1">
              <p className="anim-rise inline-flex items-center gap-2 border border-[#7ec8cb]/25 bg-[#7ec8cb]/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#9fd8da]">
                Human-reviewed transcription studio
              </p>

              

              <h1 className="anim-rise anim-rise-delay-1 mt-2 font-display text-[clamp(1.7rem,4.2vw,3.1rem)] font-bold leading-[1.1] tracking-tight text-white">
                Professional{" "}
                <span className="text-[#7ec8cb]">Transcription</span>
                <br className="hidden sm:block" /> &{" "}
                <span className="text-[#7ec8cb]">Translation</span> Services
              </h1>

              <p className="anim-rise anim-rise-delay-2 mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/70 sm:mt-5 sm:text-base lg:text-lg">
                Bridging speech and usable text with precision. Our boutique team
                delivers accurate, speaker-labeled transcripts—on time,
                confidential, and ready to publish, cite, or share.
              </p>

              <div className="anim-rise anim-rise-delay-3 mt-6 flex flex-wrap items-center gap-4 sm:mt-8 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-[#0a3d7a] px-7 py-3.5 text-sm font-semibold text-white transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#0c4a94]"
                >
                  Get Started
                  <ArrowRight
                    className="size-4 transition group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#9fd8da]"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/35">
                    <PlayCircle className="size-5 text-white" aria-hidden />
                  </span>
                  Watch How It Works
                </Link>
              </div>
            </div>

            <div className="order-1 flex min-h-0 justify-center lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-[26rem] sm:max-w-[32rem] md:max-w-[38rem] lg:max-w-none lg:w-[min(100%,42rem)] xl:w-[min(100%,48rem)]">
                <div
                  className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(126,200,203,0.4)_0%,_rgba(197,139,75,0.12)_45%,_transparent_70%)] blur-2xl"
                  aria-hidden="true"
                />
                <div className="hero-drift anim-rise anim-rise-delay-4 relative overflow-hidden rounded-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/15">
                  <Image
                    src="/heroteam.jpg"
                    alt="Team collaborating with laptops and headphones in a studio workspace"
                    width={1600}
                    height={1200}
                    priority
                    sizes="(max-width: 1024px) 60vw, 48vw"
                    className="hero-ken relative mx-auto h-auto max-h-[36svh] w-full object-cover object-center sm:max-h-[44svh] lg:max-h-[min(62svh,36rem)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageFrame hero={<HomeHero />}>
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-paper px-5 py-16 sm:px-8 sm:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex border border-ink-soft/20 bg-ink-soft/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
              Delivery standards
            </p>
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-[2.15rem] md:leading-tight">
              Built for clarity, confidentiality, and deadline work
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mute">
              The essentials clients check before sending a file—scoped clearly,
              reviewed carefully, delivered ready to use.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {proofPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="group relative overflow-hidden bg-mist/50 px-6 py-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-ink sm:px-7 sm:py-8"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] bg-signal"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-full border border-ink/10 bg-paper text-ink-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-signal/40 group-hover:bg-signal group-hover:text-ink">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-sm font-bold tracking-wide text-mist-deep transition-colors duration-500 group-hover:text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 font-display text-[1.7rem] font-bold leading-none tracking-tight text-ink transition-colors duration-500 group-hover:text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-mute transition-colors duration-500 group-hover:text-white/55">
                    {item.label}
                  </p>
                </article>
              );
            })}
          </div>
          
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/35 px-5 py-24 sm:px-8 sm:py-32">
        <div
          className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-ink-soft/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Our services"
            title="Comprehensive language solutions"
            copy="Transcription first—with translation and recording support when your project needs more than one step."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="group relative flex flex-col overflow-hidden bg-paper px-7 py-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-ink sm:px-8 sm:py-9"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] bg-signal"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-full border border-ink/10 bg-mist text-ink-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-signal/40 group-hover:bg-signal group-hover:text-ink">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-sm font-bold tracking-wide text-mist-deep transition-colors duration-500 group-hover:text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-mute transition-colors duration-500 group-hover:text-white/65">
                    {service.summary}
                  </p>

                  <ul className="mt-7 space-y-3 border-t border-[var(--line)] pt-6 transition-colors duration-500 group-hover:border-white/15">
                    {service.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ink transition-colors duration-500 group-hover:text-white/85"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/services"
                    className="link-arrow mt-8 text-sm font-semibold text-ink-soft transition-colors duration-500 group-hover:text-signal"
                  >
                    Learn more
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--line)] bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="A streamlined path from recording to delivery"
            copy="Simple on the surface. Careful at every stage—so accuracy, confidentiality, and turnaround stay aligned."
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.num}
                  className="group relative flex flex-col overflow-hidden bg-mist/50 px-6 py-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-ink sm:px-7 sm:py-8"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] bg-signal"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-full border border-ink/10 bg-paper text-ink-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-signal/40 group-hover:bg-signal group-hover:text-ink">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-3xl font-bold leading-none tracking-tight text-mist-deep transition-colors duration-500 group-hover:text-signal sm:text-4xl">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink transition-colors duration-500 group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute transition-colors duration-500 group-hover:text-white/65">
                    {step.copy}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-ink-soft/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-signal/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#9fd8da]">
              What sets us apart
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Boutique care. Platform-grade clarity.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
              Large platforms optimize for volume. We optimize for the transcript
              you actually open and use—accurate, organized, and confidential.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col overflow-hidden bg-white/[0.04] px-7 py-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-paper sm:px-8 sm:py-9"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] bg-signal"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-signal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-ink/10 group-hover:bg-signal group-hover:text-ink">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-sm font-bold tracking-wide text-white/25 transition-colors duration-500 group-hover:text-mist-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white transition-colors duration-500 group-hover:text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 transition-colors duration-500 group-hover:text-mute sm:text-base">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/35 px-5 py-24 sm:px-8 sm:py-32">
        <div
          className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-ink-soft/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Use cases"
            title="Built for the work behind the recording"
            copy="From depositions to podcasts, we shape transcripts around how your team will use them next."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col overflow-hidden bg-paper px-6 py-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-ink sm:px-7 sm:py-8"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] bg-signal"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-full border border-ink/10 bg-mist text-ink-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-signal/40 group-hover:bg-signal group-hover:text-ink">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-sm font-bold tracking-wide text-mist-deep transition-colors duration-500 group-hover:text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute transition-colors duration-500 group-hover:text-white/65">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/use-cases"
              className="link-arrow text-sm font-semibold text-ink-soft hover:text-ink"
            >
              Browse industry use cases
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <StudioStory />

      <GuaranteeBand />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Client feedback"
            title="What our clients say"
            copy="Trusted for clarity under deadline—by creators, researchers, and professional teams."
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
            align="center"
            eyebrow="FAQ"
            title="Quick answers before you send a file"
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.slice(0, 5).map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="cursor-pointer font-display text-lg font-semibold text-ink">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="faq-toggle text-xl text-signal">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-mute">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="link-arrow text-sm font-semibold text-ink-soft hover:text-ink"
            >
              Read all FAQs
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
