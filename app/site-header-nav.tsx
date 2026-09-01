"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./brand";

export function SiteHeaderNav({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const idleClass = dark
    ? "text-white/75 hover:text-white"
    : "text-mute hover:text-ink";
  const activeClass = dark ? "nav-link--active-dark" : "nav-link--active";

  return (
    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-4 text-sm md:flex lg:gap-6">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive ? activeClass : idleClass}`}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
