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
          align="center"
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

          <div className="mt-14 space-y-8 sm:space-y-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="group relative grid overflow-hidden rounded-[18px] border border-[var(--line)] bg-paper transition-colors duration-300 hover:border-signal/50 hover:bg-mist/30 lg:grid-cols-2"
                >
                  <div
                    className="absolute inset-x-8 top-0 z-10 h-[2px] rounded-full bg-signal/0 transition-colors duration-300 group-hover:bg-signal"
                    aria-hidden="true"
                  />

                  <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-full">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/5"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-col justify-center px-7 py-8 sm:px-10 sm:py-10">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-mist text-ink-soft transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-display text-xs font-bold tracking-[0.14em] text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="type-body mt-4 sm:text-lg">
                      {service.summary}
                    </p>
                    <p className="type-body-sm mt-3">
                      {service.details}
                    </p>

                    <ul className="mt-7 space-y-2.5 border-t border-[var(--line)] pt-6">
                      {service.outcomes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 type-body-sm text-ink"
                        >
                          <span
                            className="size-1.5 shrink-0 rounded-full bg-signal"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="btn btn-solid btn-arrow-shift mt-8 self-start"
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
            <Link href="/pricing" className="btn btn-outline btn-arrow-shift">
              Compare pricing
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link href="/use-cases" className="btn btn-outline btn-arrow-shift">
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
