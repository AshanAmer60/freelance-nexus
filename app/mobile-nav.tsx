"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { SiteLogo, navLinks } from "./brand";

export function MobileNav({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const iconColor = dark ? "text-white" : "text-ink";

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className={`relative z-[70] inline-flex size-11 items-center justify-center border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          dark
            ? "border-white/25 bg-ink/40 text-white hover:border-white/50 hover:bg-white/10"
            : "border-[var(--line)] bg-paper/90 text-ink hover:border-signal hover:bg-signal/10"
        }`}
      >
        <span className="relative size-5">
          <Menu
            className={`absolute inset-0 size-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              open ? "scale-75 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            } ${iconColor}`}
            aria-hidden
          />
          <X
            className={`absolute inset-0 size-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              open ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0"
            } ${iconColor}`}
            aria-hidden
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-[60] h-[100dvh] min-h-[100svh] bg-ink/60 backdrop-blur-md transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-[60] flex h-[100dvh] max-h-[100dvh] min-h-[100svh] w-[80vw] flex-col bg-[#fdfdfd] shadow-[-20px_0_60px_rgba(6,40,88,0.22)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--line)] bg-[#fdfdfd] px-5 py-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            <span className="inline-flex shrink-0">
              <SiteLogo size={44} className="rounded-full ring-1 ring-black/5" />
            </span>
            <span className="font-display text-sm font-semibold text-ink">
              Freelance Nexus
            </span>
          </Link>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto bg-[#fdfdfd] px-3 py-6">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 font-display text-lg font-semibold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "bg-mist text-ink"
                    : "text-ink hover:bg-mist hover:text-ink-soft"
                }`}
                aria-current={isActive ? "page" : undefined}
                style={{
                  transitionDelay: open ? `${index * 40}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(12px)",
                }}
              >
                {link.label}
                <ArrowRight className="size-4 text-signal" aria-hidden />
              </Link>
            );
          })}
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-3 py-3.5 font-display text-lg font-semibold text-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-mist hover:text-ink-soft"
          >
            About
            <ArrowRight className="size-4 text-signal" aria-hidden />
          </Link>
        </nav>

        <div className="border-t border-[var(--line)] bg-[#fdfdfd] p-5">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-solid w-full px-5 py-3.5"
          >
            Get a quote
            <ArrowRight className="btn-arrow size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
