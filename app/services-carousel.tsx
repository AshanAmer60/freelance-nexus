"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, FileText, Languages, Mic } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceSlide = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  outcomes: string[];
  image: string;
  imageAlt: string;
};

const icons: Record<string, LucideIcon> = {
  transcription: FileText,
  translation: Languages,
  recording: Mic,
};

export function ServicesCarousel({ items }: { items: ServiceSlide[] }) {
  const [active, setActive] = useState(0);
  const count = items.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [active, count]);

  const goTo = (index: number) => {
    setActive((index + count) % count);
  };

  const service = items[active];
  const Icon = icons[service.slug] ?? FileText;

  return (
    <div className="mt-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => goTo(index)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                index === active
                  ? "bg-ink text-paper"
                  : "bg-mist text-ink-soft hover:bg-ink-soft/15 hover:text-ink"
              }`}
              aria-pressed={index === active}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="inline-flex size-10 !cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-paper text-ink transition hover:border-signal hover:bg-signal hover:text-white"
            aria-label="Previous service"
          >
            <ArrowLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="inline-flex size-10 !cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-paper text-ink transition hover:border-signal hover:bg-signal hover:text-white"
            aria-label="Next service"
          >
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      <article className="group relative overflow-hidden rounded-[22px] bg-paper shadow-[0_16px_48px_rgba(6,40,88,0.1)] ring-1 ring-[var(--line)]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] lg:min-h-[420px]">
            <Image
              key={service.image}
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-opacity duration-500"
              priority={active === 0}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/10"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col justify-center px-7 py-8 sm:px-10 sm:py-10 lg:px-12">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-mist text-ink-soft transition-all duration-500 group-hover:bg-signal group-hover:text-white">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="font-display text-xs font-bold tracking-[0.14em] text-mist-deep">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink">
              {service.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
              {service.summary}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mute/90">
              {service.details}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {service.outcomes.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-signal hover:bg-signal"
            >
              Learn more
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => goTo(index)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              index === active ? "w-8 bg-ink" : "w-2 bg-mist-deep/40 hover:bg-ink/40"
            }`}
            aria-label={`Show ${item.title}`}
            aria-current={index === active}
          />
        ))}
      </div>
    </div>
  );
}
