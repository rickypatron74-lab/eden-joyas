"use client";

import { useEffect, useRef } from "react";

/** Video que solo descarga y reproduce cuando entra en pantalla (ahorra ~2.6 MB en la carga inicial). */
export function LazyVideo({ src, poster, style, className }: { src: string; poster?: string; style?: React.CSSProperties; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const start = () => { if (!v.src) { v.src = src; } v.play().catch(() => {}); };
    if (!("IntersectionObserver" in window)) { start(); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) start(); else v.pause(); });
    }, { rootMargin: "200px" });
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  return <video ref={ref} className={className} muted loop playsInline preload="none" poster={poster} style={style} />;
}
