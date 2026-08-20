"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll como mejora progresiva. El contenido es visible por
 * defecto; sólo se oculta cuando esta clase se añade y el observer corre,
 * de modo que si el JS falla nada queda escondido.
 */
export function RevealController() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;
    document.body.classList.add("reveal-ready");

    const reveal = (el: HTMLElement) => {
      const d = el.getAttribute("data-reveal-delay");
      if (d) el.style.transitionDelay = d + "ms";
      el.classList.add("is-in");
    };
    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight;
      return r.top < h * 0.92;
    };

    els.forEach((el) => { if (inView(el)) reveal(el); });

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { reveal(e.target as HTMLElement); io!.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      els.forEach((el) => { if (!el.classList.contains("is-in")) io!.observe(el); });
    }

    const failsafe = setTimeout(() => els.forEach(reveal), 2500);
    return () => { if (io) io.disconnect(); clearTimeout(failsafe); };
  });

  return null;
}
