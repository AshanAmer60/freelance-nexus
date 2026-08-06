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
          eyebrow="Use cases"
          title="Built for the work."
          copy="Different recordings have different stakes. We shape delivery around legal clarity, research analysis, media publishing, and team documentation."
          secondaryCta={{ href: "/services", label: "View services" }}
        />
      }
    >
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

                  <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
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
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white"
            >
              Discuss your use case
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Have a specialized use case?" />
    </PageFrame>
  );
}
