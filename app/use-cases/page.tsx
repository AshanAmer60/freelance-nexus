import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CtaBand,
  InteriorHero,
  PageFrame,
  SectionHeading,
  useCases,
} from "../site";

export const metadata: Metadata = {
  title: "Use Cases | Freelance Nexus",
  description:
    "Transcription use cases for legal, research, podcasts, medical, market research, and enterprise teams.",
};

export default function UseCasesPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          align="center"
          eyebrow="Use cases"
          title="Built for the work."
          copy="Different recordings have different stakes. We shape delivery around legal clarity, research analysis, media publishing, and team documentation."
          secondaryCta={{ href: "/services", label: "View services" }}
        />
      }
    >
      <section className="relative overflow-hidden bg-mist/35 py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="Who we support"
            title="From evidence to episodes."
            copy="Tell us your industry and intended use—we’ll recommend style, formatting, and turnaround."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col rounded-[18px] border border-[var(--line)] bg-paper p-6 transition-colors duration-300 hover:border-signal/50 hover:bg-mist/40 sm:p-7"
                >
                  <div
                    className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-signal/0 transition-colors duration-300 group-hover:bg-signal"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-mist text-ink-soft transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="font-display text-xs font-bold tracking-[0.14em] text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
            >
              Discuss your use case
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Have a specialized use case?" />
    </PageFrame>
  );
}
