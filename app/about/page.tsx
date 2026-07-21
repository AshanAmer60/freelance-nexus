import type { Metadata } from "next";
import Link from "next/link";
import {
  CtaBand,
  InteriorHero,
  PageFrame,
  ProofStrip,
  QuoteCard,
  SectionHeading,
} from "../site";

export const metadata: Metadata = {
  title: "About | Freelance Nexus",
  description:
    "Learn how Freelance Nexus approaches transcription with human review, confidentiality, and usable delivery.",
};

const values = [
  {
    title: "Clarity over clutter",
    copy: "The transcript should be easier to use than the recording was to navigate.",
  },
  {
    title: "Human judgment",
    copy: "Names, jargon, speaker shifts, and context are reviewed with care—not left to chance.",
  },
  {
    title: "Designed for next steps",
    copy: "Whether you publish, cite, file, or share internally, delivery should already support that move.",
  },
];

export default function AboutPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          eyebrow="About"
          title="A transcription studio with editorial instinct."
          copy="Freelance Nexus exists for clients who need more than a rough text export—accurate transcripts shaped for real use, from Adyala Road, RWP."
          accent={<QuoteCard />}
        />
      }
    >
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Our approach"
            title="Respect the voice. Deliver usable text."
          />
          <div className="grid gap-6">
            {values.map((value) => (
              <article
                key={value.title}
                className="border border-[var(--line)] bg-paper/80 p-8 shadow-[0_18px_60px_rgba(6,40,88,0.05)]"
              >
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {value.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mute">
                  {value.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(4,123,127,0.28),_transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
            Delivery principles
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Precision without losing the human voice.
          </h2>
          <div className="mt-12">
            <ProofStrip dark />
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex bg-signal px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-paper"
            >
              Start your project
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageFrame>
  );
}
