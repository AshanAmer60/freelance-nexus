import type { Metadata } from "next";
import {
  InteriorHero,
  PageFrame,
  QuoteCard,
  SectionHeading,
} from "../site";

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
          title="Tell us what the recording needs to become."
          copy="The more context you share, the faster we can confirm scope, pricing, and turnaround."
          accent={<QuoteCard />}
          primaryCta={{ href: "#quote-form", label: "Jump to form" }}
          secondaryCta={{ href: "/pricing", label: "View pricing" }}
        />
      }
    >
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Project inquiry"
              title="A strong quote starts with a few useful details."
              copy="Include the basics below and we can recommend the right package and timeline."
            />
            <ul className="mt-10 space-y-4">
              {prompts.map((prompt) => (
                <li
                  key={prompt}
                  className="border-l-2 border-signal bg-paper/75 px-5 py-4 text-base text-ink shadow-[0_10px_40px_rgba(6,40,88,0.04)]"
                >
                  {prompt}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-mute">
              Based near Adyala Road, RWP · Serving clients locally and online
            </p>
          </div>

          <div
            id="quote-form"
            className="relative overflow-hidden bg-ink-soft p-8 text-white sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-signal/20 blur-3xl"
              aria-hidden
            />
            <form
              className="relative grid gap-4 sm:grid-cols-2"
              action="mailto:hello@freelancenexus.com"
              method="get"
              encType="text/plain"
            >
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-white/55">Name</span>
                <input
                  name="name"
                  required
                  className="w-full border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                  placeholder="Your name"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-white/55">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-white/55">Company</span>
                <input
                  name="company"
                  className="w-full border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                  placeholder="Optional"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-white/55">
                  Audio minutes
                </span>
                <input
                  name="minutes"
                  className="w-full border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                  placeholder="e.g. 45"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-white/55">Speakers</span>
                <input
                  name="speakers"
                  className="w-full border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                  placeholder="e.g. 2"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-white/55">Timeline</span>
                <input
                  name="timeline"
                  className="w-full border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                  placeholder="e.g. 48 hours"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm text-white/55">
                  Project details
                </span>
                <textarea
                  name="body"
                  rows={6}
                  required
                  className="w-full resize-y border border-white/20 bg-ink/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
                  placeholder="Service needed, format, clean-read or verbatim, industry terms, confidentiality notes…"
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-signal px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-paper"
                >
                  Request a quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
