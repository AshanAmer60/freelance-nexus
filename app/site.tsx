import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChartColumn,
  Check,
  Clock3,
  FileText,
  Files,
  GraduationCap,
  Headphones,
  Languages,
  Mic,
  Quote,
  Scale,
  ScanSearch,
  Send,
  ShieldCheck,
  Stethoscope,
  Target,
  Upload,
  MapPin,
  Mail,
} from "lucide-react";
import { SiteLogo, navLinks } from "./brand";
import { MobileNav } from "./mobile-nav";

export { SiteLogo, navLinks } from "./brand";

export const services: {
  slug: string;
  title: string;
  summary: string;
  details: string;
  outcomes: string[];
  icon: LucideIcon;
}[] = [
  {
    slug: "transcription",
    title: "Transcription",
    summary:
      "Human-reviewed transcripts with speaker labels, timestamps, and clean formatting for publishing, research, and records.",
    details:
      "Clean-read or verbatim. Built for podcasts, interviews, legal sessions, lectures, and meetings where accuracy and usability both matter.",
    outcomes: ["Speaker labels", "Timestamps", "DOCX / TXT / SRT"],
    icon: FileText,
  },
  {
    slug: "translation",
    title: "Translation",
    summary:
      "Clear translations that preserve meaning, tone, and terminology—so your message travels without losing intent.",
    details:
      "Ideal for multilingual interviews, documents, and content that needs careful handling rather than machine-only output.",
    outcomes: ["Context preserved", "Terminology care", "Publish-ready text"],
    icon: Languages,
  },
  {
    slug: "recording",
    title: "Recording support",
    summary:
      "Guidance and support for cleaner recordings that make transcription faster, clearer, and more affordable.",
    details:
      "Better source audio means better transcripts. We help clients prepare recordings that reduce guesswork and rework.",
    outcomes: ["Cleaner input", "Fewer revisions", "Faster delivery"],
    icon: Mic,
  },
];

export const useCases: {
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Legal & depositions",
    copy: "Confidential transcripts for interviews, statements, and proceedings—organized, discreet, and easy to reference.",
    icon: Scale,
  },
  {
    title: "Research & academia",
    copy: "Interview and lecture transcripts that preserve nuance for analysis, citation, accessibility, and review.",
    icon: GraduationCap,
  },
  {
    title: "Podcasts & media",
    copy: "Episode-ready transcripts and caption-friendly text for publishing, SEO, show notes, and repurposing.",
    icon: Headphones,
  },
  {
    title: "Medical & professional",
    copy: "Careful handling of specialized terminology for sessions, notes, and professional documentation needs.",
    icon: Stethoscope,
  },
  {
    title: "Market research",
    copy: "Focus groups and interviews turned into searchable text for insight extraction and team sharing.",
    icon: ChartColumn,
  },
  {
    title: "Meetings & enterprise",
    copy: "Webinars, workshops, and internal calls converted into actionable records your team can actually use.",
    icon: Building2,
  },
];

export const pricingPlans = [
  {
    name: "Standard",
    rate: "From $0.90",
    unit: "per audio minute",
    blurb: "Clean-read transcripts for clear recordings with up to two speakers.",
    features: [
      "Human-reviewed delivery",
      "Speaker labels",
      "Standard turnaround",
      "DOCX or TXT",
    ],
    featured: false,
  },
  {
    name: "Professional",
    rate: "From $1.25",
    unit: "per audio minute",
    blurb: "Best for interviews, podcasts, and multi-speaker sessions that need extra care.",
    features: [
      "Timestamps available",
      "Verbatim or clean-read",
      "Multi-speaker handling",
      "Priority communication",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    rate: "Custom",
    unit: "volume & recurring",
    blurb: "For teams with ongoing needs, specialized formatting, or confidential workflows.",
    features: [
      "NDA-ready process",
      "Custom style guides",
      "Flexible turnaround",
      "Dedicated project handling",
    ],
    featured: false,
  },
];

export const steps: {
  num: string;
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    num: "01",
    title: "Share your audio",
    copy: "Send a file or secure link with your preferred format, speaker count, and deadline.",
    icon: Upload,
  },
  {
    num: "02",
    title: "Human transcription",
    copy: "We transcribe with attention to names, accents, terminology, and overlapping speech.",
    icon: FileText,
  },
  {
    num: "03",
    title: "Quality review",
    copy: "A careful pass checks clarity, labels, and structure before anything is delivered.",
    icon: ScanSearch,
  },
  {
    num: "04",
    title: "Receive & use",
    copy: "Get a polished transcript ready to publish, cite, file, caption, or share internally.",
    icon: Send,
  },
];

export const proofPoints: {
  label: string;
  value: string;
  icon: LucideIcon;
}[] = [
  { label: "Human-reviewed", value: "Every file", icon: BadgeCheck },
  { label: "Accuracy focus", value: "99%+ target", icon: Target },
  { label: "Turnaround", value: "24–72 hrs*", icon: Clock3 },
  { label: "Formats", value: "DOCX · TXT · SRT", icon: Files },
];

export const differentiators: {
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Human judgment",
    copy: "Names, jargon, accents, and crosstalk get reviewed—not left to probability alone.",
    icon: ScanSearch,
  },
  {
    title: "Usable delivery",
    copy: "Speaker labels, clean structure, and formats that fit publishing, research, or filing.",
    icon: FileText,
  },
  {
    title: "Direct communication",
    copy: "Ask questions, set style preferences, and get a quote without ticket-queue friction.",
    icon: ShieldCheck,
  },
];

export const testimonials = [
  {
    quote:
      "We sent a 90-minute interview with heavy jargon. The transcript came back labeled, clean-read, and ready to publish the same week—almost no cleanup.",
    name: "Sara M.",
    role: "Podcast producer",
  },
  {
    quote:
      "Our research team needed accurate speaker turns under a hard deadline. Freelance Nexus asked the right scoping questions and delivered usable text on time.",
    name: "Daniel R.",
    role: "Qualitative research lead",
  },
  {
    quote:
      "Confidential handling and clear communication mattered as much as accuracy. The finished transcript was organized enough to cite immediately.",
    name: "Ayesha K.",
    role: "Legal operations coordinator",
  },
];

export const guarantees = [
  {
    title: "Human-reviewed before delivery",
    copy: "Every transcript is checked for speakers, terminology, and structure—not left as a raw machine export.",
  },
  {
    title: "Scoped before we start",
    copy: "We confirm style, format, speakers, and deadline up front so pricing and turnaround stay clear.",
  },
  {
    title: "Revision if we miss the brief",
    copy: "If delivery doesn’t match the agreed style or labeling scope, we revise it.",
  },
];

export const studioStory = {
  eyebrow: "The studio",
  title: "Not a ticket queue. A transcription studio.",
  copy: "Freelance Nexus is built for clients who want direct communication and finished text they can actually use—publish, cite, file, or share. Based near Adyala Road, RWP, we work with creators, researchers, and professionals locally and online.",
  points: [
    "Boutique handling instead of mass-upload anonymity",
    "Transcription, translation, and recording support under one mark",
    "Delivery shaped for the next task—not just word capture",
  ],
};

export const faqs = [
  {
    q: "What is Freelance Nexus?",
    a: "Freelance Nexus is a transcription studio offering human-reviewed transcription, translation, and recording support for creators, researchers, professionals, and teams.",
  },
  {
    q: "Do you use AI or humans?",
    a: "We prioritize human judgment. Where helpful, automated drafts may assist speed—but every delivered transcript is reviewed for clarity, speakers, terminology, and usability.",
  },
  {
    q: "How accurate are your transcripts?",
    a: "We target 99%+ accuracy on clear audio. Results depend on recording quality, accents, crosstalk, and specialized vocabulary. Difficult audio may need more time or clarification.",
  },
  {
    q: "What turnaround times do you offer?",
    a: "Most standard projects deliver in 24–72 hours depending on length and complexity. Rush options are available—share your deadline when you request a quote.",
  },
  {
    q: "Which formats do you accept and deliver?",
    a: "We accept common audio and video formats (MP3, WAV, M4A, MP4, and more). Delivery is typically DOCX or TXT, with SRT available for caption-ready work.",
  },
  {
    q: "Can you do verbatim or clean-read?",
    a: "Yes. Clean-read removes fillers and false starts for readability. Verbatim keeps more of the spoken detail when you need linguistic or legal precision.",
  },
  {
    q: "Is my content confidential?",
    a: "Yes. Files are handled discreetly. We can work under NDA for sensitive legal, medical, research, or business material.",
  },
  {
    q: "Do you offer a revision guarantee?",
    a: "Yes. If the delivered transcript doesn’t match the agreed style, speaker labeling, or formatting scope, we revise it. Accuracy still depends on audio clarity—difficult recordings are scoped honestly before work begins.",
  },
  {
    q: "Do you offer translation as well?",
    a: "Yes. Translation is part of our service suite alongside transcription and recording support—ask for a combined quote when needed.",
  },
];

export const sampleTranscript = `Freelance Nexus — Sample Transcript
Style: Clean-read | Speakers: 2 | Timestamps: yes
Service: Human-reviewed transcription

[00:00:12] Interviewer:
Thanks for joining us today. To start, what made accuracy so important in your last project?

[00:00:21] Guest:
We needed a transcript we could publish without rewriting everything. Names, technical terms, and speaker changes all had to land correctly.

[00:00:38] Interviewer:
And how did the final delivery help your team?

[00:00:44] Guest:
It saved hours. The formatting was clear, the labels were consistent, and we could pull quotes immediately.

[00:01:02] Interviewer:
Would you recommend a boutique transcription studio over a large upload platform?

[00:01:09] Guest:
For work that matters, yes. Direct communication and a human review pass made a noticeable difference in the finished file.

— End of sample —`;

export function DownloadSampleLink({
  className = "btn-primary px-6 py-3 text-sm",
  label = "Download sample (.txt)",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a href="/sample-transcript.txt" download className={className}>
      {label}
      <ArrowRight className="btn-arrow size-4" aria-hidden />
    </a>
  );
}

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const textClass = dark
    ? "text-white/75 hover:text-white"
    : "text-mute hover:text-ink";

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link
          href="/"
          className={`group flex items-center gap-3 font-display text-sm font-semibold tracking-wide sm:text-base ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          <SiteLogo size={40} priority className="ring-1 ring-black/5" />
          <span className="hidden transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-signal sm:inline">
            Freelance Nexus
          </span>
        </Link>
        <div className="flex items-center gap-3 text-sm sm:gap-4 lg:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link hidden md:inline ${textClass}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary hidden px-4 py-2 text-sm md:inline-flex"
          >
            Get a quote
            <ArrowRight className="btn-arrow size-4" aria-hidden />
          </Link>
          <MobileNav dark={dark} />
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-ink-soft/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-signal/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1.1fr] lg:gap-10">
          <div className="group max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <SiteLogo size={56} className="ring-1 ring-white/10" />
              <span className="font-display text-lg font-semibold tracking-tight">
                Freelance Nexus
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Human-reviewed transcription, translation, and recording support.
              Boutique care for work that has to be right.
            </p>
            <div className="mt-6 flex items-start gap-2.5 text-sm text-white/55">
              <MapPin className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
              <span>Adyala Road, RWP</span>
            </div>
            <a
              href="mailto:hello@freelancenexus.com"
              className="mt-3 inline-flex items-center gap-2.5 text-sm text-white/55 transition-colors duration-500 hover:text-signal"
            >
              <Mail className="size-4 shrink-0 text-signal" aria-hidden />
              hello@freelancenexus.com
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
              Explore
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-arrow w-fit transition-colors duration-500 hover:text-white"
                >
                  {link.label}
                  <ArrowRight className="size-3.5 text-signal/80" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
              Studio
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <Link
                href="/about"
                className="link-arrow w-fit transition-colors duration-500 hover:text-white"
              >
                About
                <ArrowRight className="size-3.5 text-signal/80" aria-hidden />
              </Link>
              <Link
                href="/sample"
                className="link-arrow w-fit transition-colors duration-500 hover:text-white"
              >
                Sample transcript
                <ArrowRight className="size-3.5 text-signal/80" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="link-arrow w-fit transition-colors duration-500 hover:text-white"
              >
                Transcription
                <ArrowRight className="size-3.5 text-signal/80" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="link-arrow w-fit transition-colors duration-500 hover:text-white"
              >
                Translation
                <ArrowRight className="size-3.5 text-signal/80" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
              Start a project
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Share length, speakers, deadline, and format for a clear quote.
            </p>
            <Link href="/contact" className="btn-primary mt-6 w-full px-5 py-3 text-sm">
              Request a quote
              <ArrowRight className="btn-arrow size-4" aria-hidden />
            </Link>
            <a
              href="/sample-transcript.txt"
              download
              className="link-arrow mt-4 text-sm text-white/55 hover:text-signal"
            >
              Download sample
              <ArrowRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {year} Freelance Nexus. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-white/40">
            Precision transcription for the spoken word.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({
  children,
  hero,
}: {
  children: ReactNode;
  hero: ReactNode;
}) {
  return (
    <div className="page-atmosphere flex min-h-full flex-col">
      {hero}
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function InteriorHero({
  eyebrow,
  title,
  copy,
  accent,
  primaryCta = { href: "/contact", label: "Get a quote" },
  secondaryCta = { href: "/pricing", label: "View pricing" },
}: {
  eyebrow: string;
  title: string;
  copy: string;
  accent?: ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="hero-plane relative overflow-hidden text-white">
      <SiteHeader dark />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative mx-auto grid min-h-[62svh] max-w-6xl gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div className="max-w-2xl">
          <p className="anim-rise text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
            {eyebrow}
          </p>
          <h1 className="anim-rise anim-rise-delay-1 mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <div className="accent-rule mt-5" />
          <p className="anim-rise anim-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            {copy}
          </p>
          <div className="anim-rise anim-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href={primaryCta.href} className="btn-primary px-6 py-3.5 text-sm">
              {primaryCta.label}
              <ArrowRight className="btn-arrow size-4" aria-hidden />
            </Link>
            <Link
              href={secondaryCta.href}
              className="btn-secondary px-6 py-3.5 text-sm"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        {accent ? (
          <div className="anim-rise anim-rise-delay-4">{accent}</div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-mute">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-lg leading-relaxed text-mute">{copy}</p>
      ) : null}
    </div>
  );
}

export function QuoteCard() {
  return (
    <div className="card-lift group relative overflow-hidden border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(197,139,75,0.2),_transparent_45%)]" />
      <div className="relative flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/45">
        <FileText className="icon-float size-4 text-signal" aria-hidden />
        Sample excerpt
      </div>
      <div className="relative mt-6 space-y-4 font-mono text-sm leading-relaxed text-white/78">
        <p className="text-signal">[00:12:04] Speaker 1</p>
        <p>
          When the recording is important, accuracy is not a feature. It is the
          whole point.
        </p>
        <p className="text-signal">[00:12:28] Speaker 2</p>
        <p>
          Freelance Nexus delivers transcripts that read cleanly, preserve
          intent, and still respect the original voice.
        </p>
      </div>
      <Link
        href="/sample"
        className="link-arrow relative mt-6 text-sm font-medium text-signal hover:text-paper"
      >
        View & download sample
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </div>
  );
}

export function ProofStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${
        dark ? "text-white" : "text-ink"
      }`}
    >
      {proofPoints.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={`proof-item group border-l-2 border-signal pl-4 ${
              dark ? "" : "bg-paper/50 py-2"
            }`}
          >
            <div className="mb-2 flex items-center gap-2">
              <Icon
                className={`size-4 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 ${
                  dark ? "text-signal" : "text-ink-soft"
                }`}
                aria-hidden
              />
              <p
                className={`text-xs uppercase tracking-[0.18em] ${
                  dark ? "text-white/45" : "text-mute"
                }`}
              >
                {item.label}
              </p>
            </div>
            <p className="font-display text-xl font-semibold">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((item) => (
        <figure
          key={item.name}
          className="card-lift border border-[var(--line)] bg-paper/80 p-7 shadow-[0_18px_60px_rgba(6,40,88,0.05)]"
        >
          <Quote
            className="quote-mark size-7 text-ink-soft/70"
            aria-hidden
          />
          <blockquote className="mt-4 text-base leading-relaxed text-ink">
            “{item.quote}”
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-display text-sm font-semibold text-ink">
              {item.name}
            </p>
            <p className="text-sm text-mute">{item.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function FeatureCheck({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-2.5 text-sm ${
        light ? "text-white/85" : "text-ink"
      }`}
    >
      <Check
        className={`mt-0.5 size-4 shrink-0 ${
          light ? "text-signal" : "text-ink-soft"
        }`}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}

export function StudioStory() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={studioStory.eyebrow}
            title={studioStory.title}
            copy={studioStory.copy}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn-primary bg-ink px-6 py-3 text-sm text-paper hover:bg-ink-soft hover:text-paper">
              Our story
              <ArrowRight className="btn-arrow size-4" aria-hidden />
            </Link>
            <DownloadSampleLink className="link-arrow border border-[var(--line)] bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:border-signal" />
          </div>
        </div>
        <ul className="space-y-4">
          {studioStory.points.map((point) => (
            <li
              key={point}
              className="card-lift border-l-2 border-signal bg-paper/80 px-5 py-5 text-base leading-relaxed text-ink shadow-[0_12px_40px_rgba(6,40,88,0.04)]"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function GuaranteeBand() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl overflow-hidden border border-[var(--line)] bg-mist/40">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-ink px-8 py-12 text-white sm:px-10 sm:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Our promise
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Publish-ready transcripts. Human-reviewed before delivery.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Typical turnaround is 24–72 hours depending on length and
              complexity. If we miss the agreed brief, we revise.
            </p>
            <Link href="/contact" className="btn-primary mt-8 px-6 py-3 text-sm">
              Get a free quote
              <ArrowRight className="btn-arrow size-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-0 sm:grid-cols-1">
            {guarantees.map((item) => (
              <div
                key={item.title}
                className="card-lift border-b border-[var(--line)] bg-paper/70 px-8 py-8 last:border-b-0 sm:px-10"
              >
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-ink-soft" aria-hidden />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready when your audio is.",
  copy = "Share length, speakers, deadline, and format. We’ll reply with a clear quote.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-ink px-5 py-16 text-white sm:px-8 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/25 blur-3xl soft-pulse"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-ink-soft/40 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
          {copy}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary px-8 py-3.5 text-sm">
            Request a quote
            <ArrowRight className="btn-arrow size-4" aria-hidden />
          </Link>
          <DownloadSampleLink
            className="btn-secondary px-8 py-3.5 text-sm"
            label="Download a sample transcript"
          />
        </div>
      </div>
    </section>
  );
}
