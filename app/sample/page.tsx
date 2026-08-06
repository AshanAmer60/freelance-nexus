import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CtaBand,
  DownloadSampleLink,
  InteriorHero,
  PageFrame,
  SectionHeading,
  sampleTranscript,
} from "../site";

export const metadata: Metadata = {
  title: "Sample Transcript | Freelance Nexus",
  description:
    "Preview and download a Freelance Nexus clean-read sample transcript with speaker labels and timestamps.",
};

export default function SamplePage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          eyebrow="Sample"
          title="See the finish first."
          copy="This clean-read excerpt shows speaker labels, timestamps, and the readable structure we aim for on every delivery."
          primaryCta={{ href: "/contact", label: "Get a quote" }}
          secondaryCta={{ href: "/pricing", label: "View pricing" }}
        />
      }
    >
      <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-ink-soft/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="Sample transcript"
            title="Clean-read, two speakers."
            copy="Download the file, or read it here. Your project can be delivered as clean-read or verbatim, with optional timestamps and preferred format."
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <DownloadSampleLink className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition duration-500 hover:-translate-y-0.5 hover:bg-ink-soft" />
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white"
            >
              Request your quote
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[22px] bg-ink shadow-[0_16px_48px_rgba(6,40,88,0.28)] ring-1 ring-white/10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-signal/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4 sm:px-8">
              <div>
                <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#9fd8da]">
                  Preview
                </p>
                <p className="mt-2 text-sm text-white/55">
                  Clean-read · Speakers: 2 · Timestamps: yes
                </p>
              </div>
              <span className="hidden font-display text-xs font-bold tracking-[0.14em] text-white/30 sm:inline">
                01
              </span>
            </div>
            <pre className="relative overflow-x-auto px-6 py-8 font-mono text-sm leading-relaxed whitespace-pre-wrap text-paper/90 sm:px-8 sm:py-10">
              {sampleTranscript}
            </pre>
          </div>
        </div>
      </section>

      <CtaBand title="Like what you see?" />
    </PageFrame>
  );
}
