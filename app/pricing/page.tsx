import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CtaBand,
  FeatureCheck,
  InteriorHero,
  PageFrame,
  ProofStrip,
  SectionHeading,
  pricingPlans,
} from "../site";

export const metadata: Metadata = {
  title: "Pricing | Freelance Nexus",
  description:
    "Transparent transcription pricing from Freelance Nexus—standard, professional, and enterprise options.",
};

export default function PricingPage() {
  return (
    <PageFrame
      hero={
        <InteriorHero
          eyebrow="Pricing"
          title="Clear rates. No surprise tickets."
          copy="Start with per-minute guidance, then we refine your quote based on speakers, audio quality, turnaround, and add-ons like timestamps or verbatim."
          primaryCta={{ href: "/contact", label: "Request a quote" }}
          secondaryCta={{ href: "/sample", label: "See sample output" }}
          accent={
            <div className="card-lift border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                What affects price
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                <FeatureCheck light>Audio clarity and accents</FeatureCheck>
                <FeatureCheck light>Number of speakers</FeatureCheck>
                <FeatureCheck light>Verbatim vs clean-read</FeatureCheck>
                <FeatureCheck light>Timestamps and rush delivery</FeatureCheck>
              </ul>
            </div>
          }
        />
      }
    >
      <section className="border-b border-[var(--line)] bg-paper/70 px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <ProofStrip />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Plans"
            title="Choose the level of care your project needs."
            copy="Final quotes are confirmed after we review a sample of your audio when helpful."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`card-lift flex flex-col border p-8 ${
                  plan.featured
                    ? "border-signal bg-ink text-white shadow-[0_24px_80px_rgba(6,40,88,0.18)]"
                    : "border-[var(--line)] bg-paper/85"
                }`}
              >
                {plan.featured ? (
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">
                    Most popular
                  </span>
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">
                    Package
                  </span>
                )}
                <h2
                  className={`mt-4 font-display text-3xl font-semibold ${
                    plan.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`mt-4 font-display text-4xl font-bold ${
                    plan.featured ? "text-signal" : "text-ink-soft"
                  }`}
                >
                  {plan.rate}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    plan.featured ? "text-white/55" : "text-mute"
                  }`}
                >
                  {plan.unit}
                </p>
                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    plan.featured ? "text-white/70" : "text-mute"
                  }`}
                >
                  {plan.blurb}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <FeatureCheck key={feature} light={plan.featured}>
                      {feature}
                    </FeatureCheck>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn-primary mt-8 px-5 py-3 text-sm ${
                    plan.featured
                      ? ""
                      : "bg-ink text-paper hover:bg-ink-soft hover:text-paper"
                  }`}
                >
                  Get this quote
                  <ArrowRight className="btn-arrow size-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <div className="card-lift mx-auto max-w-6xl border border-[var(--line)] bg-mist/50 p-8">
          <h3 className="font-display text-2xl font-semibold text-ink">
            Need education or nonprofit pricing?
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
            Ask about available discounts for students, researchers, educators,
            and nonprofit projects when you request a quote.
          </p>
        </div>
      </section>

      <CtaBand copy="Send approximate minutes, speaker count, and deadline for a firm quote within one business day." />
    </PageFrame>
  );
}
