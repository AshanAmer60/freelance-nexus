"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-full border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal";

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
      setMessage("Thanks — your request was saved. We’ll reply soon.");
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
      <div className="relative mt-8 rounded-[18px] border border-white/15 bg-white/5 px-6 py-10 text-center">
        <CheckCircle2 className="mx-auto size-10 text-signal" aria-hidden />
        <p className="mt-4 font-display text-xl font-semibold text-white">
          Request received
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/65">{message}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-signal hover:bg-signal hover:text-ink"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="relative mt-8 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <label className="block sm:col-span-1">
        <span className="mb-2 block text-sm text-white/55">Name</span>
        <input
          name="name"
          required
          className={inputClass}
          placeholder="Your name"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-sm text-white/55">Email</span>
        <input
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="you@example.com"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-sm text-white/55">Company</span>
        <input name="company" className={inputClass} placeholder="Optional" />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-sm text-white/55">Audio minutes</span>
        <input name="minutes" className={inputClass} placeholder="e.g. 45" />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-sm text-white/55">Speakers</span>
        <input name="speakers" className={inputClass} placeholder="e.g. 2" />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-sm text-white/55">Timeline</span>
        <input
          name="timeline"
          className={inputClass}
          placeholder="e.g. 48 hours"
        />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-sm text-white/55">Project details</span>
        <textarea
          name="body"
          rows={6}
          required
          className="w-full resize-y rounded-[18px] border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal"
          placeholder="Service needed, format, clean-read or verbatim, industry terms, confidentiality notes…"
        />
      </label>

      {status === "error" ? (
        <p className="sm:col-span-2 text-sm text-red-300">{message}</p>
      ) : null}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-paper disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Saving…" : "Request a quote"}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}
