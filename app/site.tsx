import Image from "next/image";
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
import { SiteHeaderNav } from "./site-header-nav";

export { SiteLogo, navLinks } from "./brand";

export const services: {
  slug: string;
  title: string;
  summary: string;
  details: string;
  outcomes: string[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}[] = [
  {
    slug: "transcription",
    title: "Transcription",
    summary:
      "Human-reviewed transcripts with speaker labels, timestamps, and clean formatting for publishing, research, and records.",
    details:
      "Clean-read or verbatim. Built for podcasts, interviews, legal sessions, lectures, and meetings where accuracy and usability both matter.",
    outcomes: ["Speaker labels", "Timestamps", "Docx, TXT, and SRT"],
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Podcast microphone and recording setup on a desk",
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
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Notebook and pen for careful language and writing work",
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
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Studio microphone ready for a clean recording session",
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

export const platforms: {
  name: string;
  focus: string;
  logo: string;
}[] = [
  {
    name: "DataPlus",
    focus: "Speech annotation",
    logo: "/platforms/dataplus.png",
  },
  {
    name: "AIDI",
    focus: "Transcription workflows",
    logo: "/platforms/aidi.svg",
  },
  {
    name: "Appen",
    focus: "Data labeling",
    logo: "/platforms/appen.png",
  },
  {
    name: "OneForma",
    focus: "Audio projects",
    logo: "/platforms/oneforma.png",
  },
  {
    name: "Magic Data",
    focus: "Speech datasets",
    logo: "/platforms/magicdata.png",
  },
  {
    name: "Loft",
    focus: "Speech data ops",
    logo: "/platforms/loft.svg",
  },
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
  title: "A transcription studio.",
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
      <ArrowRight
        className="btn-arrow size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </a>
  );
}

export function SiteHeader({
  dark = false,
  solid = false,
}: {
  dark?: boolean;
  solid?: boolean;
}) {
  return (
    <>
      <header
        className={
          solid
            ? "fixed inset-x-0 top-0 z-50 border-b border-[var(--line)]/60 bg-paper/60 backdrop-blur-xl"
            : "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/40 backdrop-blur-xl"
        }
      >
        <nav className="relative mx-auto flex w-[90vw] max-w-[90vw] items-center justify-between py-3.5 sm:py-4">
          <Link
            href="/"
            className={`group flex items-center gap-3 font-display text-sm font-semibold tracking-wide sm:text-base ${
              dark && !solid ? "text-white" : "text-ink"
            }`}
          >
            <SiteLogo
              size={44}
              priority
              className="rounded-full ring-1 ring-black/5"
            />
            <span
              className={`hidden transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:inline ${
                solid
                  ? "group-hover:text-ink-soft"
                  : "group-hover:text-signal"
              }`}
            >
              Freelance Nexus
            </span>
          </Link>

          <SiteHeaderNav dark={dark && !solid} />

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-solid group hidden md:inline-flex"
            >
              Get a quote
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
            </Link>
            <MobileNav dark={dark && !solid} />
          </div>
        </nav>
      </header>
      {solid ? (
        <div className="h-[4.5rem] shrink-0 sm:h-[4.75rem]" aria-hidden="true" />
      ) : null}
    </>
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
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto w-[90vw] max-w-[90vw] pt-16 pb-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-3">
              <SiteLogo
                size={52}
                className="rounded-full ring-1 ring-white/10"
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                Freelance Nexus
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Human-reviewed transcription, translation, and recording support.
              Boutique care for work that has to be right.
            </p>
          </div>

          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#9fd8da]">
              Explore
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit transition-colors duration-300 hover:text-signal"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#9fd8da]">
              Studio
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <Link
                href="/about"
                className="w-fit transition-colors duration-300 hover:text-signal"
              >
                About
              </Link>
              <Link
                href="/sample"
                className="w-fit transition-colors duration-300 hover:text-signal"
              >
                Sample transcript
              </Link>
              <Link
                href="/services"
                className="w-fit transition-colors duration-300 hover:text-signal"
              >
                Transcription
              </Link>
              <Link
                href="/services"
                className="w-fit transition-colors duration-300 hover:text-signal"
              >
                Translation
              </Link>
            </div>
          </div>

          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#9fd8da]">
              Contact
            </p>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-2.5 text-sm text-white/65">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-signal">
                  <MapPin className="size-3.5" aria-hidden />
                </span>
                <span className="pt-1.5">Adyala Road, RWP</span>
              </div>
              <a
                href="mailto:hello@freelancenexus.com"
                className="inline-flex items-center gap-2.5 text-sm text-white/65 transition-colors duration-300 hover:text-signal"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-signal">
                  <Mail className="size-3.5" aria-hidden />
                </span>
                hello@freelancenexus.com
              </a>
            </div>
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
  align = "left",
  primaryCta = { href: "/contact", label: "Get a quote" },
  secondaryCta = { href: "/pricing", label: "View pricing" },
}: {
  eyebrow: string;
  title: string;
  copy: string;
  accent?: ReactNode;
  align?: "left" | "center";
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  const centered = align === "center";

  return (
    <section className="hero-plane relative overflow-x-hidden text-white">
      <SiteHeader dark />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className={`relative mx-auto flex min-h-[62svh] w-[90vw] max-w-[90vw] flex-col pb-16 pt-28 sm:pb-20 ${
          centered
            ? "items-center justify-center text-center"
            : "justify-end gap-10 lg:grid lg:grid-cols-[1fr_0.85fr] lg:items-end"
        }`}
      >
        <div className={centered ? "mx-auto max-w-3xl" : "max-w-2xl"}>
          <p
            className="eyebrow-pill eyebrow-pill--dark anim-rise"
          >
            {eyebrow}
          </p>
          <h1 className="anim-rise anim-rise-delay-1 mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.08]">
            {title}
          </h1>
          <div
            className={`accent-rule mt-5 ${centered ? "mx-auto" : ""}`}
          />
          <p
            className={`anim-rise anim-rise-delay-2 mt-6 text-lg leading-relaxed text-white/65 ${
              centered ? "mx-auto max-w-2xl" : "max-w-xl"
            }`}
          >
            {copy}
          </p>
          <div
            className={`anim-rise anim-rise-delay-3 mt-8 flex flex-wrap gap-3 ${
              centered ? "justify-center" : ""
            }`}
          >
            <Link
              href={primaryCta.href}
              className="btn btn-solid btn-arrow-shift anim-rise anim-rise-delay-3"
            >
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href={secondaryCta.href}
              className="btn btn-ghost-light anim-rise anim-rise-delay-3"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        {accent ? (
          <div
            className={`anim-rise anim-rise-delay-4 ${
              centered ? "mt-10 w-full max-w-md text-left" : ""
            }`}
          >
            {accent}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  titleClassName = "",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  titleClassName?: string;
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto w-full text-center" : "max-w-3xl"}>
      <p
        className={`eyebrow-pill eyebrow-pill--light`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl ${
          centered ? "mx-auto" : ""
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`type-body mt-5 text-lg ${
            centered ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {copy}
        </p>
      ) : null}
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
              dark
                ? "border-l-signal/80 bg-white/[0.03] py-3 pr-3"
                : "bg-paper/50 py-2"
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
    <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
      {testimonials.map((item, index) => (
        <figure
          key={item.name}
          className="group relative flex flex-col rounded-[18px] border border-[var(--line)] bg-paper p-7 transition-colors duration-300 hover:border-signal/50 hover:bg-mist/40 sm:p-8"
        >
          <div
            className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-signal/0 transition-colors duration-300 group-hover:bg-signal"
            aria-hidden="true"
          />

          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-mist text-signal transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
              <Quote className="size-4" aria-hidden />
            </span>
            <span className="font-display text-xs font-bold tracking-[0.14em] text-signal">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <blockquote className="type-body mt-6 flex-1 text-ink">
            “{item.quote}”
          </blockquote>

          <figcaption className="mt-7 border-t border-[var(--line)] pt-5">
            <p className="font-display text-sm font-semibold tracking-tight text-ink">
              {item.name}
            </p>
            <p className="type-body-sm mt-1">{item.role}</p>
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
    <section className="relative overflow-hidden border-y border-[var(--line)] bg-paper py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-[90vw] max-w-[90vw] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={studioStory.eyebrow}
            title={studioStory.title}
            copy={studioStory.copy}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-ink-soft"
            >
              Our story
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <DownloadSampleLink className="group inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-paper px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper" />
          </div>
        </div>

        <ul className="overflow-hidden rounded-[20px] bg-paper shadow-[0_16px_48px_rgba(6,40,88,0.06)] ring-1 ring-[var(--line)]">
          {studioStory.points.map((point, index) => {
            const isLast = index === studioStory.points.length - 1;
            return (
              <li
                key={point}
                className={`group flex items-start gap-4 px-6 py-6 sm:px-7 sm:py-7 ${
                  isLast ? "" : "border-b border-[var(--line)]"
                }`}
              >
                <span className="font-display text-sm font-bold tracking-[0.14em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-0.5 text-[0.95rem] leading-relaxed text-ink sm:text-base">
                  {point}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function GuaranteeBand() {
  return (
    <section className="relative overflow-hidden bg-mist/35 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-[90vw] max-w-[90vw]">
        <div className="overflow-hidden rounded-[20px] bg-paper shadow-[0_16px_48px_rgba(6,40,88,0.08)] ring-1 ring-[var(--line)]">
          <div className="relative overflow-hidden bg-ink px-8 py-12 text-center text-white sm:px-10 sm:py-14">
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80"
              alt=""
              fill
              sizes="90vw"
              className="object-cover object-center"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-ink/88"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow-pill eyebrow-pill--dark mx-auto">
                Our promise
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Publish-ready transcripts.
              </h2>
              <div
                className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-signal"
                aria-hidden="true"
              />
              <p className="type-body mx-auto mt-5 max-w-md text-white/65">
                Human-reviewed before delivery. Typical turnaround is 24–72 hours
                depending on length and complexity. If we miss the agreed brief, we
                revise.
              </p>
              <Link
                href="/contact"
                className="btn btn-solid btn-arrow-shift mt-8 px-6 py-3"
              >
                Get a free quote
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <ul className="grid divide-y divide-[var(--line)] bg-paper sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {guarantees.map((item, index) => (
              <li
                key={item.title}
                className="flex items-start gap-4 px-7 py-7 sm:px-8 sm:py-8"
              >
                <span className="font-display text-sm font-bold tracking-[0.14em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="type-body-sm mt-2">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Let’s start your file.",
  copy = "Partner with a boutique transcription studio for accurate, confidential, human-reviewed delivery. Share your brief and we’ll reply with a clear quote.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-paper py-16 sm:py-24 lg:py-28">
      <div className="relative mx-auto w-[90vw] max-w-[90vw]">
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-14 text-white shadow-[0_24px_70px_rgba(6,40,88,0.28)] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/25 blur-3xl soft-pulse"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-ink-soft/45 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            aria-hidden
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="eyebrow-pill eyebrow-pill--dark mx-auto">
              Next step
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div
              className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-signal"
              aria-hidden="true"
            />
            <p className="type-body mx-auto mt-5 max-w-2xl text-lg text-white/65">
              {copy}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn btn-solid btn-arrow-shift px-7 py-3.5"
              >
                Request a quote
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <DownloadSampleLink
                className="btn btn-ghost-light px-7 py-3.5"
                label="Download a sample"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
