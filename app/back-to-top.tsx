"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";

function getScrollThreshold() {
  return Math.max(1000, window.innerHeight * 2);
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setVisible(window.scrollY > getScrollThreshold());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  return createPortal(
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="btn btn-solid-ink fixed right-[5vw] bottom-6 z-[100] size-12 p-0 shadow-[0_12px_36px_rgba(6,40,88,0.28)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:bottom-8"
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>,
    document.body,
  );
}
