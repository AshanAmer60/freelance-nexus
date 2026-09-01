import type { Metadata } from "next";
import {
  CtaBand,
  InteriorHero,
  PageFrame,
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
          align="center"
          eyebrow="Process"
          title="From recording to delivery."
          copy="Simple on the surface. Careful at every stage—so accuracy, confidentiality, and turnaround stay aligned."
        />
      }
    >
      <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="Workflow"
            title="Four steps. No black boxes."
            copy="A clear path from upload to polished text—scoped carefully and reviewed before delivery."
          />

          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.num}
                  className="group relative flex flex-col rounded-[18px] border border-[var(--line)] bg-paper p-7 transition-colors duration-300 hover:border-signal/50 hover:bg-mist/40 sm:p-8"
                >
                  <div
                    className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-signal/0 transition-colors duration-300 group-hover:bg-signal"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-sm font-bold tracking-[0.14em] text-signal">
                      {step.num}
                    </span>
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-mist text-ink-soft transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                      <Icon className="size-4" aria-hidden />
                    </span>
                  </div>

                  <h2 className="mt-7 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {step.copy}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/35 py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="Quality"
            title="Care at every pass."
            copy="Beyond the four steps, these habits keep delivery accurate, clear, and ready to use."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {quality.map((item, index) => (
              <article
                key={item.title}
                className="group relative flex flex-col rounded-[18px] border border-[var(--line)] bg-paper p-7 transition-colors duration-300 hover:border-signal/50 hover:bg-mist/40 sm:p-8"
              >
                <div
                  className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-signal/0 transition-colors duration-300 group-hover:bg-signal"
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-bold tracking-[0.14em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-mute">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to start a file?" />
    </PageFrame>
  );
}
