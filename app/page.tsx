import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { HeroCursor } from "./hero-cursor";
import { ServicesCarousel } from "./services-carousel";
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
    <section
      id="home-hero"
      className="relative flex h-[100svh] max-h-[100svh] flex-col overflow-hidden"
    >
      <SiteHeader solid />
      <HeroCursor />
      <div
        id="home-hero-stage"
        className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[#062858] text-white"
      >
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
              <p className="anim-rise inline-flex items-center gap-2 rounded-full border border-[#7ec8cb]/25 bg-[#7ec8cb]/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#9fd8da]">
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
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0a3d7a] px-7 py-3.5 text-sm font-semibold text-white transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#0c4a94]"
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

            <div className="order-1 hidden min-h-0 justify-center lg:order-2 lg:flex lg:justify-end">
              <div className="group relative w-full max-w-[26rem] pt-5 pr-5 pl-3 sm:max-w-[32rem] sm:pt-6 sm:pr-6 sm:pl-4 md:max-w-[38rem] lg:max-w-none lg:w-[min(100%,42rem)] xl:w-[min(100%,48rem)]">
                {/* Far back stacked card — slight left tilt */}
                <div
                  className="absolute top-0 right-3 bottom-5 left-2 -translate-x-2 -rotate-3 rounded-[18px] bg-[#a8c8d6]/30 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-x-4 group-hover:-rotate-5 sm:bottom-6 sm:left-3 sm:right-4 sm:-translate-x-3 sm:group-hover:-translate-x-5"
                  aria-hidden="true"
                />
                {/* Near back stacked card */}
                <div
                  className="absolute top-1 right-2 bottom-4 left-1 -translate-x-1.5 -rotate-1 rounded-[18px] bg-[#a8c8d6]/45 transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-x-3 group-hover:-rotate-[2.5deg] sm:bottom-5 sm:left-2 sm:right-3 sm:-translate-x-2 sm:group-hover:-translate-x-3.5"
                  aria-hidden="true"
                />
                {/* Front image card */}
                <div className="relative overflow-hidden rounded-[18px] shadow-[0_20px_55px_rgba(0,0,0,0.38)] transition-[transform,box-shadow] duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_70px_rgba(0,0,0,0.48)]">
                  <Image
                    src="/heroteam.jpg"
                    alt="Team collaborating with laptops and headphones in a studio workspace"
                    width={1600}
                    height={1200}
                    priority
                    sizes="(max-width: 1023px) 0px, 48vw"
                    className="relative mx-auto block h-auto max-h-[36svh] w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.035] sm:max-h-[44svh] lg:max-h-[min(62svh,36rem)]"
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
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-paper py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-ink-soft/20 bg-ink-soft/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
              Delivery standards
            </p>
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-[2.15rem] md:leading-tight">
              Clear. Confidential. On time.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mute">
              The essentials clients check before sending a file—scoped clearly,
              reviewed carefully, delivered ready to use.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="group relative rounded-[16px] bg-paper p-6 shadow-[0_10px_30px_rgba(6,40,88,0.06)] ring-1 ring-[var(--line)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(6,40,88,0.12)] hover:ring-signal/40 sm:p-7"
                >
                  <div
                    className="absolute -inset-x-1 -top-1 bottom-2 -z-10 rounded-[16px] bg-[#a8c8d6]/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-mist text-ink-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-signal group-hover:text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-xs font-bold tracking-[0.14em] text-mist-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 font-display text-2xl font-bold leading-none tracking-tight text-ink sm:text-[1.75rem]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-mute">
                    {item.label}
                  </p>
                </article>
              );
            })}
          </div>
          
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="Our services"
            title="Language solutions"
            copy="Transcription first—with translation and recording support when your project needs more than one step."
          />
          <ServicesCarousel
            items={services.map(
              ({ slug, title, summary, details, outcomes, image, imageAlt }) => ({
                slug,
                title,
                summary,
                details,
                outcomes,
                image,
                imageAlt,
              }),
            )}
          />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--line)] bg-paper py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From recording to delivery"
            copy="Simple on the surface. Careful at every stage—so accuracy, confidentiality, and turnaround stay aligned."
          />
          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute top-[3.25rem] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent lg:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.num}
                    className="group relative flex flex-col rounded-[20px] bg-paper p-7 shadow-[0_12px_36px_rgba(6,40,88,0.07)] ring-1 ring-[var(--line)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(6,40,88,0.14)] hover:ring-signal/45 sm:p-8"
                  >
                    <div
                      className="absolute -inset-x-1.5 -top-1.5 bottom-3 -z-10 rounded-[20px] bg-[#a8c8d6]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-center justify-between gap-3">
                      <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-full bg-mist font-display text-lg font-bold tracking-wide text-ink-soft ring-4 ring-paper transition-all duration-500 group-hover:bg-signal group-hover:text-white">
                        {step.num}
                      </span>
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-mist/80 text-ink-soft transition-all duration-500 group-hover:bg-ink group-hover:text-white">
                        <Icon className="size-4" aria-hidden />
                      </span>
                    </div>

                    {index < steps.length - 1 ? (
                      <span
                        className="absolute top-[3.4rem] -right-3 z-20 hidden size-2.5 rounded-full bg-signal lg:block"
                        aria-hidden="true"
                      />
                    ) : null}

                    <h3 className="mt-7 font-display text-xl font-semibold tracking-tight text-ink">
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
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-ink-soft/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-signal/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto grid w-[90vw] max-w-[90vw] gap-12 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#9fd8da]">
              What sets us apart
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Precision over volume.
            </h2>
            <div className="mt-5 h-[3px] w-16 rounded-full bg-signal" aria-hidden="true" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
              Large platforms optimize for throughput. We optimize for the
              transcript you actually open—accurate, organized, and confidential.
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="group flex gap-5 py-7 transition-colors duration-500 first:pt-0 last:pb-0 sm:gap-6 sm:py-8"
                >
                  <span className="mt-1 font-display text-sm font-bold tracking-[0.14em] text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-signal transition-all duration-500 group-hover:bg-signal group-hover:text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                      {item.copy}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/35 py-24 sm:py-32">
        <div
          className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-ink-soft/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="Use cases"
            title="Built for the work."
            copy="From depositions to podcasts, we shape transcripts around how your team will use them next."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col rounded-[18px] bg-paper p-6 shadow-[0_12px_36px_rgba(6,40,88,0.07)] ring-1 ring-[var(--line)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(6,40,88,0.14)] hover:ring-signal/45 sm:p-7"
                >
                  <div
                    className="absolute -inset-x-1.5 -top-1.5 bottom-3 -z-10 rounded-[18px] bg-[#a8c8d6]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-mist text-ink-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-signal group-hover:text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-xs font-bold tracking-[0.14em] text-mist-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white"
            >
              Browse industry use cases
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <StudioStory />

      <GuaranteeBand />

      <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="Client feedback"
            title="What clients say"
            copy="Trusted for clarity under deadline—by creators, researchers, and professional teams."
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="relative overflow-hidden bg-mist/35 py-24 sm:py-32">
        <div
          className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-ink-soft/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Quick answers"
            copy="Clear replies to the questions clients ask before sending a file."
          />
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {faqs.slice(0, 5).map((item, index) => (
              <details
                key={item.q}
                className="group rounded-[18px] bg-paper px-6 py-2 shadow-[0_12px_36px_rgba(6,40,88,0.06)] ring-1 ring-[var(--line)] transition-all duration-300 open:shadow-[0_18px_44px_rgba(6,40,88,0.1)] open:ring-signal/40 sm:px-7"
              >
                <summary className="cursor-pointer py-5 font-display text-lg font-semibold text-ink">
                  <span className="flex items-center justify-between gap-4">
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="hidden shrink-0 font-display text-xs font-bold tracking-[0.14em] text-mist-deep sm:inline">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">{item.q}</span>
                    </span>
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-mist text-lg leading-none text-ink-soft transition-all duration-300 group-open:rotate-45 group-open:bg-signal group-open:text-white">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-[var(--line)] pb-5 pt-4 text-base leading-relaxed text-mute sm:pl-12">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white"
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
