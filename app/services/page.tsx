import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CtaBand,
  InteriorHero,
  PageFrame,
  SectionHeading,
  services,
} from "../site";

export const metadata: Metadata = {
  title: "Services | Freelance Nexus",
  description:
    "Human-reviewed transcription, translation, and recording support from Freelance Nexus.",
};

export default function ServicesPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          eyebrow="Services"
          title="Language solutions."
          copy="Transcription is our core. Translation and recording support complete the workflow when your project needs more than one step."
          secondaryCta={{ href: "/sample", label: "View sample" }}
        />
      }
    >
      <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="What we deliver"
            title="Three services. One standard."
            copy="Every engagement is scoped to your audio quality, speakers, deadline, and how the final text will be used."
          />

          <div className="mt-14 space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="group relative grid overflow-hidden rounded-[22px] bg-paper shadow-[0_16px_48px_rgba(6,40,88,0.1)] ring-1 ring-[var(--line)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(6,40,88,0.14)] hover:ring-signal/45 lg:grid-cols-2"
                >
                  <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-full">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/10"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-col justify-center px-7 py-8 sm:px-10 sm:py-10">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex size-12 items-center justify-center rounded-full bg-mist text-ink-soft transition-all duration-500 group-hover:bg-signal group-hover:text-white">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-display text-xs font-bold tracking-[0.14em] text-mist-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
                      {service.summary}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-mute/90">
                      {service.details}
                    </p>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {service.outcomes.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink-soft transition-colors duration-500 group-hover:bg-signal/15 group-hover:text-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white"
                    >
                      Request a quote
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition duration-500 hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              Compare pricing
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/use-cases"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white"
            >
              See use cases
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Need a tailored transcript?" />
    </PageFrame>
  );
}
