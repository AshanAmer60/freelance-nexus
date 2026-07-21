import type { Metadata } from "next";
import {
  CtaBand,
  InteriorHero,
  PageFrame,
  QuoteCard,
  SectionHeading,
  steps,
} from "../site";

export const metadata: Metadata = {
  title: "Process | Freelance Nexus",
  description:
    "See how Freelance Nexus moves from upload to human transcription, review, and polished delivery.",
};

const quality = [
  {
    title: "Intake clarity",
    copy: "We confirm length, speakers, style (verbatim or clean-read), formats, and deadline before work begins.",
  },
  {
    title: "Human transcription",
    copy: "Attention to names, terminology, accents, and overlaps that automated tools often flatten.",
  },
  {
    title: "Multi-pass care",
    copy: "Structure, labels, and readability are checked so the file is usable the moment you open it.",
  },
];

export default function ProcessPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          eyebrow="Process"
          title="A reliable path from recording to delivery."
          copy="Simple on the surface. Careful at every stage—so accuracy, confidentiality, and turnaround stay aligned."
          accent={<QuoteCard />}
        />
      }
    >
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Workflow"
            title="Four steps. No black boxes."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.num}
                  className="card-lift group border border-[var(--line)] bg-paper/80 p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="icon-badge">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-5xl font-bold text-mist-deep transition group-hover:text-signal">
                      {step.num}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-mute">
                    {step.copy}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {quality.map((item) => (
            <article
              key={item.title}
              className="card-lift bg-[linear-gradient(180deg,rgba(253,253,253,0.95),rgba(232,242,242,0.85))] p-8 shadow-[0_18px_60px_rgba(6,40,88,0.05)]"
            >
              <h3 className="font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-mute">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageFrame>
  );
}
