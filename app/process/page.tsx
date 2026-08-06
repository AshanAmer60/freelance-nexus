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

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute top-[3.25rem] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent lg:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.num}
                    className="group relative flex flex-col rounded-[20px] bg-paper p-7 shadow-[0_12px_36px_rgba(6,40,88,0.07)] ring-1 ring-[var(--line)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(6,40,88,0.14)] hover:ring-signal/45 sm:p-8"
                  >
                    <div
                      className="absolute -inset-x-1.5 -top-1.5 bottom-3 -z-10 rounded-[20px] bg-[#a8c8d6]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-center justify-between gap-3">
                      <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-full bg-mist font-display text-lg font-bold tracking-wide text-ink-soft ring-4 ring-paper transition-all duration-500 group-hover:bg-signal group-hover:text-white">
                        {step.num}
                      </span>
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-mist/80 text-ink-soft transition-all duration-500 group-hover:bg-ink group-hover:text-white">
                        <Icon className="size-4" aria-hidden />
                      </span>
                    </div>

                    {index < steps.length - 1 ? (
                      <span
                        className="absolute top-[3.4rem] -right-3 z-20 hidden size-2.5 rounded-full bg-signal lg:block"
                        aria-hidden="true"
                      />
                    ) : null}

                    <h2 className="mt-7 font-display text-xl font-semibold tracking-tight text-ink">
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
        </div>
      </section>

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
            eyebrow="Quality"
            title="Care at every pass."
            copy="Beyond the four steps, these habits keep delivery accurate, clear, and ready to use."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {quality.map((item, index) => (
              <article
                key={item.title}
                className="group relative flex flex-col rounded-[18px] bg-paper p-7 shadow-[0_12px_36px_rgba(6,40,88,0.07)] ring-1 ring-[var(--line)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(6,40,88,0.14)] hover:ring-signal/45 sm:p-8"
              >
                <div
                  className="absolute -inset-x-1.5 -top-1.5 bottom-3 -z-10 rounded-[18px] bg-[#a8c8d6]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-mist font-display text-sm font-bold text-ink-soft transition-all duration-500 group-hover:bg-signal group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
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
