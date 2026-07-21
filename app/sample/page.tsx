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
          title="See the finish before you order."
          copy="This clean-read excerpt shows speaker labels, timestamps, and the readable structure we aim for on every delivery."
          primaryCta={{ href: "/contact", label: "Get a quote" }}
          secondaryCta={{ href: "/pricing", label: "View pricing" }}
        />
      }
    >
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Sample transcript"
            title="Clean-read excerpt with two speakers."
            copy="Download the file, or read it here. Your project can be delivered as clean-read or verbatim, with optional timestamps and preferred format."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <DownloadSampleLink />
            <Link
              href="/contact"
              className="link-arrow border border-[var(--line)] px-6 py-3 text-sm font-medium text-ink transition hover:border-signal"
            >
              Request your quote
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <pre className="mt-12 overflow-x-auto border border-[var(--line)] bg-ink p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap text-paper/90 sm:p-10">
            {sampleTranscript}
          </pre>
        </div>
      </section>
      <CtaBand />
    </PageFrame>
  );
}
