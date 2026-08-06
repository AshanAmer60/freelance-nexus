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
        <div
          className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-ink-soft/10 blur-3xl"
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
                  className="group relative flex items-start gap-4 rounded-[16px] bg-paper px-5 py-4 shadow-[0_10px_30px_rgba(6,40,88,0.06)] ring-1 ring-[var(--line)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(6,40,88,0.12)] hover:ring-signal/40"
                >
                  <div
                    className="absolute -inset-x-1 -top-1 bottom-2 -z-10 rounded-[16px] bg-[#a8c8d6]/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-mist font-display text-xs font-bold text-ink-soft transition-all duration-500 group-hover:bg-signal group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-base text-ink">{prompt}</p>
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
                className="inline-flex cursor-pointer items-center gap-3 text-sm text-mute transition-colors hover:text-ink-soft"
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
            className="relative overflow-hidden rounded-[22px] bg-ink p-8 text-white shadow-[0_16px_48px_rgba(6,40,88,0.28)] sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-signal/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-ink-soft/40 blur-3xl"
              aria-hidden
            />

            <p className="relative inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#9fd8da]">
              Quote request
            </p>
            <h3 className="relative mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Share your brief.
            </h3>
            <div
              className="relative mt-4 h-[3px] w-14 rounded-full bg-signal"
              aria-hidden="true"
            />

            <QuoteForm />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
