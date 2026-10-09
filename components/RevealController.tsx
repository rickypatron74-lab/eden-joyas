"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveal-on-scroll como mejora progresiva. El contenido es visible por
 * defecto; sólo se oculta cuando esta clase se añade y el observer corre,
 * de modo que si el JS falla nada queda escondido.
 */
export function RevealController() {
  const pathname = usePathname();

  // Re-ejecuta en cada cambio de ruta: el layout persiste al navegar, así que
  // sin esto los [data-reveal] de la página a la que vuelves quedaban ocultos.
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
  }, [pathname]);

  // Scroll suave solo para anclas de la misma página. El `scroll-behavior: smooth`
  // global rompía la restauración de scroll al volver con "atrás".
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const href = a.getAttribute("href") || "";
      const m = href.match(/^\/?#(.+)$/);
      if (!m || (href.startsWith("/") && window.location.pathname !== "/")) return;
      const target = document.getElementById(decodeURIComponent(m[1]));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#" + m[1]);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
