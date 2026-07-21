import type { Metadata } from "next";
import {
  CtaBand,
  InteriorHero,
  PageFrame,
  SectionHeading,
  useCases,
} from "../site";

export const metadata: Metadata = {
  title: "Use Cases | Freelance Nexus",
  description:
    "Transcription use cases for legal, research, podcasts, medical, market research, and enterprise teams.",
};

export default function UseCasesPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          eyebrow="Use cases"
          title="Industry-ready transcripts for real workflows."
          copy="Different recordings have different stakes. We shape delivery around legal clarity, research analysis, media publishing, and team documentation."
          secondaryCta={{ href: "/services", label: "View services" }}
        />
      }
    >
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Who we support"
            title="From evidence to episodes."
            copy="Tell us your industry and intended use—we’ll recommend style, formatting, and turnaround."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card-lift group relative overflow-hidden border border-[var(--line)] bg-paper/85 p-8 shadow-[0_18px_60px_rgba(6,40,88,0.05)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-5xl font-bold text-mist-deep transition group-hover:text-signal/50">
                      0{index + 1}
                    </span>
                    <span className="icon-badge">
                      <Icon className="size-5" aria-hidden />
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-mute">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand title="Have a specialized use case?" />
    </PageFrame>
  );
}
