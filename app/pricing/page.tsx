import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  CtaBand,
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
          align="center"
          eyebrow="Pricing"
          title="Clear rates."
          copy="Start with per-minute guidance, then we refine your quote based on speakers, audio quality, turnaround, and add-ons like timestamps or verbatim."
          primaryCta={{ href: "/contact", label: "Request a quote" }}
          secondaryCta={{ href: "/sample", label: "See sample output" }}
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
                  className="group relative rounded-[18px] border border-[var(--line)] bg-paper p-6 transition-colors duration-300 hover:border-signal/50 hover:bg-mist/40"
                >
                  <div
                    className="absolute inset-x-5 top-0 h-[2px] rounded-full bg-signal/0 transition-colors duration-300 group-hover:bg-signal"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-mist text-ink-soft transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="font-display text-xs font-bold tracking-[0.14em] text-signal">
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
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-[90vw] max-w-[90vw]">
          <SectionHeading
            align="center"
            eyebrow="Plans"
            title="Choose your level of care."
            copy="Final quotes are confirmed after we review a sample of your audio when helpful."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {pricingPlans.map((plan, index) => (
              <article
                key={plan.name}
                className={`group relative flex flex-col rounded-[18px] border p-7 transition-colors duration-300 sm:p-8 ${
                  plan.featured
                    ? "border-signal/40 bg-ink text-white hover:border-signal"
                    : "border-[var(--line)] bg-paper hover:border-signal/50 hover:bg-mist/40"
                }`}
              >
                <div
                  className={`absolute inset-x-6 top-0 h-[2px] rounded-full transition-colors duration-300 ${
                    plan.featured
                      ? "bg-signal"
                      : "bg-signal/0 group-hover:bg-signal"
                  }`}
                  aria-hidden="true"
                />

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
                      plan.featured ? "text-signal" : "text-signal"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2
                  className={`mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl ${
                    plan.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`mt-4 font-display text-4xl font-bold tracking-tight ${
                    plan.featured ? "text-signal" : "text-ink"
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

                <ul
                  className={`mt-8 flex-1 space-y-3 border-t pt-6 ${
                    plan.featured ? "border-white/10" : "border-[var(--line)]"
                  }`}
                >
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
                  className={`group/link mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                    plan.featured
                      ? "bg-signal text-ink hover:bg-paper"
                      : "bg-ink text-paper hover:bg-ink-soft"
                  }`}
                >
                  Get this quote
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    aria-hidden
                  />
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
