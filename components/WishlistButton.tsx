"use client";

import { useWishlist } from "./WishlistProvider";

export function WishlistButton({ id, style }: { id: string; style?: React.CSSProperties }) {
  const wishlist = useWishlist();
  const active = wishlist.has(id);
  return (
    <button
      type="button"
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); wishlist.toggle(id); }}
      aria-label={active ? "Quitar de favoritos" : "Guardar en favoritos"}
      aria-pressed={active}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: "none", background: "rgba(250,248,245,.9)", backdropFilter: "blur(4px)", cursor: "pointer", ...style }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? "#a6803f" : "none"} stroke={active ? "#a6803f" : "var(--ink)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 20.3l8.8-8.6a5 5 0 0 0 0-7.1z" />
      </svg>
    </button>
  );
}
