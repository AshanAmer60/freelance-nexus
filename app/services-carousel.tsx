"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, FileText, Languages, Mic } from "lucide-react";
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

const AUTO_MS = 8000;

export function ServicesCarousel({ items }: { items: ServiceSlide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const count = items.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
      setProgressKey((key) => key + 1);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [active, count, paused]);

  const goTo = (index: number) => {
    setActive((index + count) % count);
    setProgressKey((key) => key + 1);
  };

  const service = items[active];
  const Icon = icons[service.slug] ?? FileText;

  return (
    <div
      className="mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Service tabs — sole navigation control */}
      <nav
        className="flex flex-wrap items-end justify-center gap-1 border-b border-[var(--line)] sm:gap-2"
        aria-label="Service options"
      >
        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => goTo(index)}
              className={`relative cursor-pointer px-3 pb-4 pt-2 text-center transition-colors duration-300 sm:px-4 ${
                isActive ? "text-ink" : "text-ink-soft/70 hover:text-ink"
              }`}
              aria-pressed={isActive}
            >
              <span
                className={`font-display text-sm font-bold tracking-[0.12em] ${
                  isActive ? "text-signal" : "text-mute"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-sm font-semibold tracking-tight">
                {item.title}
              </span>
              <span
                className={`absolute inset-x-0 bottom-0 h-[2px] rounded-full transition-colors duration-300 ${
                  isActive ? "bg-signal" : "bg-transparent"
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </nav>

      {/* Autoplay progress — tied to active tab */}
      <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-mist">
        <div
          key={progressKey}
          className="h-full w-full origin-left rounded-full bg-signal"
          style={{
            animation: `services-progress ${AUTO_MS}ms linear forwards`,
            animationPlayState: paused ? "paused" : "running",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Stage */}
      <div className="mt-8 overflow-hidden rounded-[20px] bg-paper shadow-[0_16px_48px_rgba(6,40,88,0.08)] ring-1 ring-[var(--line)] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative h-[260px] sm:h-[320px] lg:h-auto lg:min-h-[440px]">
          {items.map((item, index) => (
            <div
              key={item.slug}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== active}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div
          key={service.slug}
          className="flex flex-col justify-center bg-ink px-7 py-9 pb-10 text-white sm:px-10 sm:py-11 sm:pb-12 lg:px-12 lg:py-12 animate-[services-panel-in_0.45s_ease-out_both]"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-signal">
              <Icon className="size-5" aria-hidden />
            </span>
            <span className="type-eyebrow text-white/40">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {service.title}
          </h3>
          <p className="type-body mt-4 text-white/75">
            {service.summary}
          </p>
          <p className="type-body-sm mt-3 text-white/50">
            {service.details}
          </p>

          <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
            {service.outcomes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 type-body-sm text-white/80"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full bg-signal"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/services"
            className="btn btn-solid btn-arrow-shift mt-5 self-start px-6 py-3"
          >
            Learn more
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
