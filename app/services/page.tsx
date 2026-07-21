import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CtaBand,
  FeatureCheck,
  InteriorHero,
  PageFrame,
  QuoteCard,
  SectionHeading,
  services,
} from "../site";

export const metadata: Metadata = {
  title: "Services | Freelance Nexus",
  description:
    "Human-reviewed transcription, translation, and recording support from Freelance Nexus.",
};

export default function ServicesPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          eyebrow="Services"
          title="Speech, text, and clarity—handled with care."
          copy="Transcription is our core. Translation and recording support complete the workflow when your project needs more than one step."
          accent={<QuoteCard />}
          secondaryCta={{ href: "/sample", label: "View sample" }}
        />
      }
    >
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we deliver"
            title="Three services. One standard of precision."
            copy="Every engagement is scoped to your audio quality, speakers, deadline, and how the final text will be used."
          />
          <div className="mt-16 space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="card-lift group grid gap-6 border border-[var(--line)] bg-paper/85 p-8 shadow-[0_18px_60px_rgba(6,40,88,0.05)] lg:grid-cols-[0.2fr_1fr_0.8fr] lg:items-start"
                >
                  <div>
                    <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-signal-deep">
                      0{index + 1}
                    </span>
                    <span className="icon-badge mt-4">
                      <Icon className="size-5" aria-hidden />
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-semibold text-ink transition group-hover:text-ink-soft">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-mute">
                      {service.summary}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-mute/90">
                      {service.details}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {service.outcomes.map((item) => (
                      <FeatureCheck key={item}>{item}</FeatureCheck>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-4">
          <Link href="/pricing" className="btn-primary bg-ink px-6 py-3 text-sm text-paper hover:bg-ink-soft hover:text-paper">
            Compare pricing
            <ArrowRight className="btn-arrow size-4" aria-hidden />
          </Link>
          <Link
            href="/use-cases"
            className="link-arrow border border-[var(--line)] px-6 py-3 text-sm font-medium text-ink transition hover:border-signal"
          >
            See use cases
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>

      <CtaBand title="Need a transcript tailored to your workflow?" />
    </PageFrame>
  );
}
