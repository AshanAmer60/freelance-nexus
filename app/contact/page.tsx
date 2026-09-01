import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import {
  InteriorHero,
  PageFrame,
  SectionHeading,
} from "../site";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Contact | Freelance Nexus",
  description:
    "Request a transcription quote from Freelance Nexus—share length, speakers, deadline, and format.",
};

const prompts = [
  "Approximate audio length (minutes)",
  "Number of speakers",
  "Preferred delivery format (DOCX, TXT, SRT)",
  "Turnaround deadline",
  "Clean-read or verbatim",
];

export default function ContactPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          align="center"
          eyebrow="Contact"
          title="Let’s start your file."
          copy="The more context you share, the faster we can confirm scope, pricing, and turnaround."
          primaryCta={{ href: "#quote-form", label: "Jump to form" }}
          secondaryCta={{ href: "/pricing", label: "View pricing" }}
        />
      }
    >
      <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-[90vw] max-w-[90vw] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Project inquiry"
              title="Useful details help."
              copy="Include the basics below and we can recommend the right package and timeline."
            />

            <ul className="mt-10 space-y-3">
              {prompts.map((prompt, index) => (
                <li
                  key={prompt}
                  className="group relative flex items-start gap-4 rounded-[18px] border border-[var(--line)] bg-paper px-5 py-4 transition-colors duration-300 hover:border-signal/50 hover:bg-mist/40"
                >
                  <div
                    className="absolute inset-x-5 top-0 h-[2px] rounded-full bg-signal/0 transition-colors duration-300 group-hover:bg-signal"
                    aria-hidden="true"
                  />
                  <span className="font-display text-xs font-bold tracking-[0.14em] text-signal pt-1.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-0.5 text-base text-ink">{prompt}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-3 text-sm text-mute">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-mist text-ink-soft">
                  <MapPin className="size-4" aria-hidden />
                </span>
                Based near Adyala Road, RWP
              </div>
              <a
                href="mailto:hello@freelancenexus.com"
                className="inline-flex cursor-pointer items-center gap-3 text-sm text-mute transition-colors hover:text-ink"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-mist text-ink-soft">
                  <Mail className="size-4" aria-hidden />
                </span>
                hello@freelancenexus.com
              </a>
            </div>
          </div>

          <div
            id="quote-form"
            className="overflow-hidden rounded-[18px] border border-[var(--line)] bg-paper shadow-[0_16px_48px_rgba(6,40,88,0.06)]"
          >
            <div className="border-b border-[var(--line)] bg-ink px-8 py-7 text-white sm:px-10 sm:py-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#9fd8da]">
                    Quote request
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    Share your brief.
                  </h3>
                  <div
                    className="mt-4 h-[3px] w-14 rounded-full bg-signal"
                    aria-hidden="true"
                  />
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                    Tell us about your file—we’ll confirm scope, pricing, and
                    turnaround.
                  </p>
                </div>
                <span className="font-display text-xs font-bold tracking-[0.14em] text-white/35">
                  3 steps
                </span>
              </div>
            </div>

            <div className="px-8 py-8 sm:px-10 sm:py-10">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
