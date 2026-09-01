"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-[var(--line)] bg-paper px-4 py-3 text-sm text-ink outline-none transition placeholder:text-mute/70 focus:border-signal focus:ring-2 focus:ring-signal/15";

function FormSection({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="space-y-4">
      <legend className="mb-1 flex w-full items-center gap-3 border-b border-[var(--line)] pb-4">
        <span className="font-display text-xs font-bold tracking-[0.14em] text-signal">
          {step}
        </span>
        <span className="font-display text-sm font-semibold tracking-tight text-ink">
          {title}
        </span>
      </legend>
      {children}
    </fieldset>
  );
}

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Thanks — your request was saved. We’ll reply within one business day.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[18px] border border-[var(--line)] bg-mist/30 px-6 py-12 text-center sm:px-10">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-ink text-signal">
          <CheckCircle2 className="size-7" aria-hidden />
        </span>
        <p className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
          Request received
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mute">
          {message}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
        >
          Send another request
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <FormSection step="01" title="Your details">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-mute">
              Name <span className="text-signal">*</span>
            </span>
            <input
              name="name"
              required
              className={inputClass}
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-mute">
              Email <span className="text-signal">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="you@example.com"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-mute">
              Company
            </span>
            <input
              name="company"
              className={inputClass}
              placeholder="Optional — studio, firm, or organization"
            />
          </label>
        </div>
      </FormSection>

      <FormSection step="02" title="Project scope">
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-mute">
              Audio minutes
            </span>
            <input
              name="minutes"
              className={inputClass}
              placeholder="e.g. 45"
              inputMode="numeric"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-mute">
              Speakers
            </span>
            <input
              name="speakers"
              className={inputClass}
              placeholder="e.g. 2"
              inputMode="numeric"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-mute">
              Timeline
            </span>
            <input
              name="timeline"
              className={inputClass}
              placeholder="e.g. 48 hours"
            />
          </label>
        </div>
      </FormSection>

      <FormSection step="03" title="Your brief">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-mute">
            Project details <span className="text-signal">*</span>
          </span>
          <textarea
            name="body"
            rows={5}
            required
            className="w-full resize-y rounded-xl border border-[var(--line)] bg-paper px-4 py-3 text-sm text-ink outline-none transition placeholder:text-mute/70 focus:border-signal focus:ring-2 focus:ring-signal/15"
            placeholder="Service needed, format (DOCX / TXT / SRT), clean-read or verbatim, industry terms, confidentiality notes…"
          />
        </label>
      </FormSection>

      {status === "error" ? (
        <p
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {message}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-mute">
          We reply within one business day. Required fields are marked with{" "}
          <span className="text-signal">*</span>.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending…" : "Request a quote"}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </button>
      </div>
    </form>
  );
}
