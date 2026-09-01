import type { Metadata } from "next";
import {
  CtaBand,
  InteriorHero,
  PageFrame,
  SectionHeading,
  faqs,
} from "../site";

export const metadata: Metadata = {
  title: "FAQ | Freelance Nexus",
  description:
    "Answers about accuracy, turnaround, formats, confidentiality, verbatim vs clean-read, and more.",
};

export default function FaqPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          align="center"
          eyebrow="FAQ"
          title="Straight answers."
          copy="Accuracy, timelines, formats, confidentiality, and delivery options—explained without the runaround."
          secondaryCta={{ href: "/contact", label: "Ask a question" }}
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
            eyebrow="Common questions"
            title="Before you send a file."
            copy="Clear replies to the questions clients ask most often."
          />

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {faqs.map((item, index) => (
              <details
                key={item.q}
                className="group rounded-[18px] bg-paper px-6 py-2 shadow-[0_12px_36px_rgba(6,40,88,0.06)] ring-1 ring-[var(--line)] transition-all duration-300 open:shadow-[0_18px_44px_rgba(6,40,88,0.1)] open:ring-signal/40 sm:px-7"
              >
                <summary className="cursor-pointer list-none py-5 font-display text-lg font-semibold text-ink sm:text-xl">
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
        </div>
      </section>

      <CtaBand
        title="Still have a question?"
        copy="Send your question with project details and we’ll respond promptly."
      />
    </PageFrame>
  );
}
