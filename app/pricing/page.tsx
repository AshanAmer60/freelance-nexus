import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  CtaBand,
  FeatureCheck,
  InteriorHero,
  PageFrame,
  SectionHeading,
  pricingPlans,
  proofPoints,
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
          title="Clear rates."
          copy="Start with per-minute guidance, then we refine your quote based on speakers, audio quality, turnaround, and add-ons like timestamps or verbatim."
          primaryCta={{ href: "/contact", label: "Request a quote" }}
          secondaryCta={{ href: "/sample", label: "See sample output" }}
          accent={
            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#9fd8da]">
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
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-paper py-14 sm:py-16">
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="group relative rounded-[16px] bg-paper p-6 shadow-[0_10px_30px_rgba(6,40,88,0.06)] ring-1 ring-[var(--line)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(6,40,88,0.12)] hover:ring-signal/40"
                >
                  <div
                    className="absolute -inset-x-1 -top-1 bottom-2 -z-10 rounded-[16px] bg-[#a8c8d6]/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-mist text-ink-soft transition-all duration-500 group-hover:bg-signal group-hover:text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-xs font-bold tracking-[0.14em] text-mist-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-mute">
                    {item.label}
                  </p>
                </article>
              );
            })}
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
            eyebrow="Plans"
            title="Choose your level of care."
            copy="Final quotes are confirmed after we review a sample of your audio when helpful."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <article
                key={plan.name}
                className={`group relative flex flex-col rounded-[22px] p-7 shadow-[0_16px_48px_rgba(6,40,88,0.1)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 sm:p-8 ${
                  plan.featured
                    ? "bg-ink text-white shadow-[0_22px_60px_rgba(6,40,88,0.28)] ring-1 ring-signal/40"
                    : "bg-paper ring-1 ring-[var(--line)] hover:shadow-[0_22px_50px_rgba(6,40,88,0.14)] hover:ring-signal/45"
                }`}
              >
                {!plan.featured ? (
                  <div
                    className="absolute -inset-x-1.5 -top-1.5 bottom-3 -z-10 rounded-[22px] bg-[#a8c8d6]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                ) : null}

                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${
                      plan.featured
                        ? "border border-white/15 bg-white/5 text-[#9fd8da]"
                        : "border border-ink-soft/20 bg-ink-soft/10 text-ink-soft"
                    }`}
                  >
                    {plan.featured ? "Most popular" : "Package"}
                  </span>
                  <span
                    className={`font-display text-xs font-bold tracking-[0.14em] ${
                      plan.featured ? "text-white/30" : "text-mist-deep"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2
                  className={`mt-5 font-display text-3xl font-semibold tracking-tight ${
                    plan.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`mt-4 font-display text-4xl font-bold tracking-tight ${
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
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${
                        plan.featured ? "text-white/85" : "text-ink"
                      }`}
                    >
                      <span
                        className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-signal/20 text-signal"
                            : "bg-mist text-ink-soft"
                        }`}
                      >
                        <Check className="size-3" aria-hidden />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-signal text-ink hover:bg-paper"
                      : "bg-ink text-paper hover:bg-ink-soft"
                  }`}
                >
                  Get this quote
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <div className="rounded-[22px] bg-mist/50 px-8 py-10 ring-1 ring-[var(--line)] sm:px-10 sm:py-12">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Education or nonprofit pricing?
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
              Ask about available discounts for students, researchers,
              educators, and nonprofit projects when you request a quote.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white"
            >
              Ask about discounts
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let’s price your file."
        copy="Send approximate minutes, speaker count, and deadline for a firm quote within one business day."
      />
    </PageFrame>
  );
}
