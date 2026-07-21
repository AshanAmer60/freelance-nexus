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
          eyebrow="FAQ"
          title="Straight answers before you upload."
          copy="Accuracy, timelines, formats, confidentiality, and delivery options—explained without the runaround."
          secondaryCta={{ href: "/contact", label: "Ask a question" }}
        />
      }
    >
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Common questions"
            title="Everything clients ask before the first order."
          />
          <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((item) => (
              <details key={item.q} className="group py-7">
                <summary className="cursor-pointer list-none font-display text-xl font-semibold text-ink">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="faq-toggle text-xl text-signal">+</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Didn’t find your answer?" copy="Send your question with project details and we’ll respond promptly." />
    </PageFrame>
  );
}
