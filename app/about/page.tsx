import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CtaBand,
  DownloadSampleLink,
  GuaranteeBand,
  InteriorHero,
  PageFrame,
  ProofStrip,
  SectionHeading,
  studioStory,
} from "../site";

export const metadata: Metadata = {
  title: "About | Freelance Nexus",
  description:
    "Learn how Freelance Nexus approaches transcription with human review, confidentiality, and usable delivery from Adyala Road, RWP.",
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
        />
      }
    >
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={studioStory.eyebrow}
              title={studioStory.title}
              copy={studioStory.copy}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary px-6 py-3 text-sm">
                Start a project
                <ArrowRight className="btn-arrow size-4" aria-hidden />
              </Link>
              <DownloadSampleLink className="link-arrow border border-[var(--line)] px-6 py-3 text-sm font-medium text-ink transition hover:border-signal" />
            </div>
          </div>
          <ul className="space-y-4">
            {studioStory.points.map((point) => (
              <li
                key={point}
                className="card-lift border-l-2 border-signal bg-paper/80 px-5 py-5 text-base leading-relaxed text-ink"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="card-lift border border-[var(--line)] bg-paper/80 p-8 shadow-[0_18px_60px_rgba(6,40,88,0.05)]"
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
      </section>

      <GuaranteeBand />

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
        </div>
      </section>

      <CtaBand />
    </PageFrame>
  );
}
