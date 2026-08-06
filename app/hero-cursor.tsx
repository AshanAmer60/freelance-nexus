"use client";

import { useEffect, useRef, useState } from "react";

export function HeroCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (!finePointer || reduceMotion) return;

    setEnabled(true);

    const stage = document.getElementById("home-hero-stage");
    if (!stage) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let hovering = false;
    let interactive = false;

    const pointInStage = (x: number, y: number) => {
      const rect = stage.getBoundingClientRect();
      return (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      );
    };

    const syncFromPoint = (x: number, y: number, target: EventTarget | null) => {
      const inside = pointInStage(x, y);
      hovering = inside;
      stage.classList.toggle("hero-cursor-active", inside);

      if (!inside) {
        interactive = false;
        return;
      }

      targetX = x;
      targetY = y;

      const el = target as HTMLElement | null;
      interactive = Boolean(
        el?.closest("a, button, [role='button'], summary, input, textarea"),
      );
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${
          interactive ? 1.35 : 1
        })`;
        ringRef.current.style.opacity = hovering ? "1" : "0";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.opacity = hovering ? "1" : "0";
      }

      frame = window.requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      syncFromPoint(mouseX, mouseY, event.target);
    };

    const onScrollOrResize = () => {
      const el = document.elementFromPoint(mouseX, mouseY);
      syncFromPoint(mouseX, mouseY, el);
    };

    const onLeaveWindow = () => {
      hovering = false;
      interactive = false;
      stage.classList.remove("hero-cursor-active");
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      stage.classList.remove("hero-cursor-active");
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      document.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[80] size-10 rounded-full border-2 border-white/80 opacity-0 will-change-transform"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[80] size-1.5 rounded-full bg-white opacity-0 will-change-transform"
      />
    </>
  );
}
